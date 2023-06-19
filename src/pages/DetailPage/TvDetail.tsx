import {
  Keywords,
  QueryType,
  Reviews as ReviewsType,
  TVSeries,
  TVSeriesDetailResponse,
} from 'utils/types'
import { QueryKeys } from 'utils/constants'
import {
  fetchCredits,
  fetchDetail,
  fetchKeywords,
  fetchRecommendations,
  fetchReviews,
  fetchSimilar,
  fetchVideos,
} from './queries'
import { getCast } from './utils'
import { useQueries, useQuery } from '@tanstack/react-query'
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

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.MOVIE_DETAIL}`, id],
        queryFn: () => fetchDetail<TVSeriesDetailResponse>('tv', id as string),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_SIMILAR}`, id],
        queryFn: () => fetchSimilar<TVSeries>('tv', id as string),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_CREDITS}`, id],
        queryFn: () => fetchCredits('tv', id as string),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_VIDEOS}`, id],
        queryFn: () => fetchVideos('tv', id as string),
      },
    ],
  })

  const { data: reviews }: QueryType<ReviewsType> = useQuery(['reviews-tv', id], () =>
    fetchReviews('tv', id as string)
  )

  const { data: keywords }: QueryType<Keywords> = useQuery(['keywords-tv', id], () =>
    fetchKeywords('tv', id as string)
  )

  const { data: recommendations }: QueryType<TVSeries> = useQuery(['recommendations-tv', id], () =>
    fetchRecommendations('tv', id as string)
  )

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
        <div className='col-span-10 flex flex-col gap-4'>
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
