import {
  Keywords,
  MovieDetailResponse,
  Movies,
  QueryType,
  Reviews as ReviewsType,
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
import Error from 'components/UI/Error/Error'
import Info from './Components/Info'
import LocalizedCurrency from '@utils/components/LocalizedCurrency'
import React from 'react'
import Recommendations from './Components/Recommendations'
import Reviews from './Components/Reviews'
import Trailer from '@pages/DetailPage/Components/Trailer'

const MovieDetail = () => {
  const router = useRouter()

  const { id } = router.query

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.MOVIE_DETAIL}`, id],
        queryFn: () => fetchDetail<MovieDetailResponse>(id as string, 'movie'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_SIMILAR}`, id],
        queryFn: () => fetchSimilar<Movies>(id as string, 'movie'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_CREDITS}`, id],
        queryFn: () => fetchCredits(id as string, 'movie'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_VIDEOS}`, id],
        queryFn: () => fetchVideos(id as string, 'movie'),
      },
    ],
  })

  const { data: reviews }: QueryType<ReviewsType> = useQuery(['reviews-movie', id], () =>
    fetchReviews(id as string, 'movie')
  )

  const { data: keywords }: QueryType<Keywords> = useQuery(['keywords-movie', id], () =>
    fetchKeywords(id as string, 'movie')
  )

  const { data: recommendations }: QueryType<Movies> = useQuery(['recommendations-movie', id], () =>
    fetchRecommendations(id as string, 'movie')
  )

  if (allDataResponse.some(data => data.isLoading)) return <h1>Loading...</h1>

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data)) {
    return <Error error={404} />
  }

  const {
    title,
    genres,
    poster_path,
    overview,
    tagline,
    vote_average,
    release_date,
    runtime,
    original_language,
    status,
    budget,
    revenue,
    backdrop_path,
  } = allDataResponse[0].data || {}

  const { crew } = allDataResponse[2].data || {}

  const cast = getCast(allDataResponse[2].data?.cast).slice(0, 20)
  const trailerUrl = allDataResponse[3]?.data?.results?.filter(item => item.type === 'Trailer')?.[0]
    ?.key

  return (
    <DetailLayout
      hero={
        <DetailHero
          title={title}
          genres={genres}
          releaseDate={release_date}
          vote={vote_average}
          runtime={runtime}
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
          <Trailer trailerUrl={trailerUrl} />
          <Recommendations recommendations={recommendations?.results} />
          <Reviews data={reviews} />
        </div>
        <Info originalLanguage={original_language} status={status} keyWords={keywords?.keywords}>
          <div>
            <h4>Budget</h4>
            <LocalizedCurrency placeholder='-' amount={budget} />
          </div>
          <div>
            <h4>Revenue</h4>
            <LocalizedCurrency placeholder='-' amount={revenue} />
          </div>
        </Info>
      </div>
    </DetailLayout>
  )
}

export default MovieDetail
