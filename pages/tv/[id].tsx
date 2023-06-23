import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '@utils/constants'
import { TVSeries, TVSeriesDetailResponse } from '@utils/types'
import { fetchCredits, fetchDetail, fetchSimilar, fetchVideos } from '@pages/DetailPage/queries'
import NextHead from '@components/NextHead'
import TvDetail from '../../src/pages/DetailPage/TvDetail'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.TV_DETAIL}`, context.params?.id], () =>
      fetchDetail<TVSeriesDetailResponse>('tv', context.params?.id as string)
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_SIMILAR}`, context.params?.id], () =>
      fetchSimilar<TVSeries>('tv', context.params?.id as string)
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_CREDITS}`, context.params?.id], () =>
      fetchCredits('tv', context.params?.id as string)
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_VIDEOS}`, context.params?.id], () =>
      fetchVideos('tv', context.params?.id as string)
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

const TVDetailPage = () => (
  <>
    <NextHead />
    <TvDetail />
  </>
)

export default TVDetailPage
