import { GetStaticPaths, GetStaticProps } from 'next'
import { MovieDetailResponse, Movies } from '../../src/utils/types'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '../../src/utils/constants'
import {
  fetchCredits,
  fetchDetail,
  fetchSimilar,
  fetchVideos,
} from '../../src/pages/DetailPage/queries'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_DETAIL}`, context.params?.id], () =>
      fetchDetail<MovieDetailResponse>(context.params?.id as string, 'movie')
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_SIMILAR}`, context.params?.id], () =>
      fetchSimilar<Movies>(context.params?.id as string, 'movie')
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_CREDITS}`, context.params?.id], () =>
      fetchCredits(context.params?.id as string, 'movie')
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_VIDEOS}`, context.params?.id], () =>
      fetchVideos(context.params?.id as string, 'movie')
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

export { default } from '../../src/pages/DetailPage/MovieDetailPage'
