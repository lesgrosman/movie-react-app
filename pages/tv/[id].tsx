import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '../../src/utils/constants'
import { TVSeries, TVSeriesDetailResponse } from '../../src/utils/types'
import {
  fetchCredits,
  fetchDetail,
  fetchSimilar,
  fetchVideos,
} from '../../src/pages/DetailPage/queries'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.TV_DETAIL}`, context.params?.id], () =>
      fetchDetail<TVSeriesDetailResponse>(context.params?.id as string, 'tv')
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_SIMILAR}`, context.params?.id], () =>
      fetchSimilar<TVSeries>(context.params?.id as string, 'tv')
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_CREDITS}`, context.params?.id], () =>
      fetchCredits(context.params?.id as string, 'tv')
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_VIDEOS}`, context.params?.id], () =>
      fetchVideos(context.params?.id as string, 'tv')
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

export { default } from '../../src/pages/DetailPage/TVDetailPage'
