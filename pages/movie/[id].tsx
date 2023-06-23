import { GetStaticPaths, GetStaticProps } from 'next'
import { MovieDetailResponse, Movies } from '@utils/types'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '@utils/constants'
import { fetchCredits, fetchDetail, fetchSimilar, fetchVideos } from '@pages/DetailPage/queries'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_DETAIL}`, context.params?.id], () =>
      fetchDetail<MovieDetailResponse>('movie', context.params?.id as string)
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_SIMILAR}`, context.params?.id], () =>
      fetchSimilar<Movies>('movie', context.params?.id as string)
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_CREDITS}`, context.params?.id], () =>
      fetchCredits('movie', context.params?.id as string)
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_VIDEOS}`, context.params?.id], () =>
      fetchVideos('movie', context.params?.id as string)
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

export { default } from '../../src/pages/DetailPage/MovieDetail'
