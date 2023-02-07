import { QueryKeys } from 'utils/constants'
import { QueryType, Reviews as ReviewsType, TVSeries, TVSeriesDetailResponse } from 'utils/types'
import { fetchCredits, fetchDetail, fetchReviews, fetchSimilar, fetchVideos } from './queries'
import { getCast } from './utils'
import { useQueries, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Cast from '@components/DetailMovie/Cast'
import Container from 'components/Container'
import DetailHero from '@components/DetailMovie/Hero'
import Error from 'components/UI/Error/Error'
import React from 'react'
import Reviews from '@components/DetailMovie/Reviews'

const TvDetail = () => {
  const router = useRouter()

  const { id } = router.query

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.MOVIE_DETAIL}`, id],
        queryFn: () => fetchDetail<TVSeriesDetailResponse>(id as string, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_SIMILAR}`, id],
        queryFn: () => fetchSimilar<TVSeries>(id as string, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_CREDITS}`, id],
        queryFn: () => fetchCredits(id as string, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_VIDEOS}`, id],
        queryFn: () => fetchVideos(id as string, 'tv'),
      },
    ],
  })

  const { data: reviews }: QueryType<ReviewsType> = useQuery(['reviews-tv', id], () =>
    fetchReviews(id as string, 'tv')
  )

  if (allDataResponse.some(data => data.isLoading)) return <h1>Loading...</h1>

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data)) {
    return <Error error={404} />
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
  } = allDataResponse[0].data || {}

  const { crew } = allDataResponse[2].data || {}

  const cast = getCast(allDataResponse[2].data?.cast).slice(0, 20)

  return (
    <div className='relative text-white'>
      <div
        style={{ height: '500px' }}
        className={`bg-gradient-to-r from-cyan-700 to-blue-900 absolute w-full top-0 border -z-10`}
      />
      <Container>
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
        />
        <div className='grid grid-cols-12 text-black'>
          <div className='col-span-9 flex flex-col gap-4'>
            <Cast cast={cast} />
            <Reviews data={reviews} />
          </div>
          <div>Right side</div>
        </div>
      </Container>
    </div>
  )
}

export default TvDetail
