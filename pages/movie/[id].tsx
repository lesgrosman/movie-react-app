import { GetStaticPaths, GetStaticProps } from 'next'
import { MovieDetailResponse, Movies } from '@utils/types'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '@utils/constants'
import { getCredits, getDetail, getSimilar, getVideos } from '@pages/DetailPage/helpers'
import Header from '@components/Header'
import MovieDetail from '@pages/DetailPage/MovieDetail'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  const fetchParams = {
    type: 'movie' as 'movie' | 'tv',
    id: context.params?.id as string,
  }

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_DETAIL}`, context.params?.id], () =>
      getDetail<MovieDetailResponse>(fetchParams)
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_SIMILAR}`, context.params?.id], () =>
      getSimilar<Movies>(fetchParams)
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_CREDITS}`, context.params?.id], () =>
      getCredits(fetchParams)
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_VIDEOS}`, context.params?.id], () =>
      getVideos(fetchParams)
    ),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const MovieDetailPage = () => (
  <div className='mb-20'>
    <Header />
    <MovieDetail />
  </div>
)

export default MovieDetailPage
