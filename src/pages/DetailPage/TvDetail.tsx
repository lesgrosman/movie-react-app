import { MovieOrTv, TVSeries, TVSeriesDetailResponse } from 'utils/types'
import { QueryKeys } from 'utils/constants'
import { getCast } from './utils'
import { getCredits, getDetail, getSimilar, getVideos } from './helpers'
import { getKeywordsData, getRecommendationsData, getReviewsData } from './queries'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Cast from './Components/Cast'
import DetailHero from './Components/Hero'
import DetailLayout from '@components/Layout/DetailLayout'
import ErrorMessage from '@components/UI/Error/ErrorMessage'
import Image from '@components/Image'
import Info from './Components/Info'
import React from 'react'
import Recommendations from './Components/Recommendations'
import Reviews from './Components/Reviews'

const TvDetail = () => {
  const router = useRouter()

  const { id } = router.query

  const tvId = id as string

  const fetchParams = {
    type: 'tv' as MovieOrTv,
    id: tvId,
  }

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.MOVIE_DETAIL}`, id],
        queryFn: () => getDetail<TVSeriesDetailResponse>(fetchParams),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_SIMILAR}`, id],
        queryFn: () => getSimilar<TVSeries>(fetchParams),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_CREDITS}`, id],
        queryFn: () => getCredits(fetchParams),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_VIDEOS}`, id],
        queryFn: () => getVideos(fetchParams),
      },
    ],
  })

  const { data: reviews } = getReviewsData(fetchParams)

  const { data: keywords } = getKeywordsData(fetchParams)

  const { data: recommendations } = getRecommendationsData<TVSeries>(fetchParams)

  if (allDataResponse.some(data => data.isLoading)) return <h1>Loading...</h1>

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data)) {
    return <ErrorMessage error={404} />
  }

  const {
    name,
    genres,
    poster_path,
    overview,
    tagline,
    vote_average,
    first_air_date,
    episode_run_time,
    original_language,
    status,
    networks,
    number_of_seasons,
    backdrop_path,
  } = allDataResponse[0].data || {}

  const { crew } = allDataResponse[2].data || {}

  const cast = getCast(allDataResponse[2].data?.cast).slice(0, 20)

  return (
    <DetailLayout
      hero={
        <DetailHero
          title={name}
          genres={genres}
          releaseDate={first_air_date}
          vote={vote_average}
          runtime={episode_run_time?.[0]}
          posterPath={poster_path}
          overview={overview}
          tagline={tagline}
          crew={crew}
          bgImage={backdrop_path}
        />
      }
    >
      <div className='grid grid-cols-12 text-black'>
        <div className='sm:col-span-10 col-span-12 flex flex-col gap-4'>
          <Cast cast={cast} />
          <Recommendations recommendations={recommendations?.results} />
          <Reviews data={reviews} />
        </div>
        <Info originalLanguage={original_language} status={status} keyWords={keywords?.results}>
          <div>
            <h4>Network</h4>
            <Image src={networks?.[0]?.logo_path || ''} alt='network' width={72} height={30} />
          </div>
          <div>
            <h4>Numbers of seasons</h4>
            <span>{number_of_seasons}</span>
          </div>
        </Info>
      </div>
    </DetailLayout>
  )
}

export default TvDetail
