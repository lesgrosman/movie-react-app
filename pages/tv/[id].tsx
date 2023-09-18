import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '@utils/constants'
import { TVSeries, TVSeriesDetailResponse } from '@utils/types'
import { getCredits, getDetail, getSimilar, getVideos } from '@pages/DetailPage/helpers'
import Header from '@components/Header'
import TvDetail from '@pages/DetailPage/TvDetail'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  const fetchParams = {
    type: 'tv' as 'movie' | 'tv',
    id: context.params?.id as string,
  }

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.TV_DETAIL}`, context.params?.id], () =>
      getDetail<TVSeriesDetailResponse>(fetchParams)
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_SIMILAR}`, context.params?.id], () =>
      getSimilar<TVSeries>(fetchParams)
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_CREDITS}`, context.params?.id], () =>
      getCredits(fetchParams)
    ),
    queryClient.prefetchQuery([`${QueryKeys.TV_VIDEOS}`, context.params?.id], () =>
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

const TvDetailPage = () => (
  <div className='mb-20'>
    <Header />
    <TvDetail />
  </div>
)

export default TvDetailPage
