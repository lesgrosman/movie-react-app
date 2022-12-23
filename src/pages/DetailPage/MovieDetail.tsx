import { MovieDetailResponse, Movies } from 'utils/types'
import { QueryKeys } from 'utils/constants'
import { fetchCredits, fetchDetail, fetchSimilar, fetchVideos } from './queries'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Container from 'components/Container'
import Error from 'components/UI/Error/Error'
import HeroDetailMovie from '@components/HeroDetailMovie'
import React from 'react'

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

  if (allDataResponse.some(data => data.isLoading)) return <h1>Loading...</h1>

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data)) {
    return <Error error={404} />
  }

  const { title, genres, poster_path, overview, tagline, vote_average, release_date, runtime } =
    allDataResponse[0].data || {}

  const { crew } = allDataResponse[2].data || {}

  return (
    <div className='relative text-white'>
      <div
        style={{ height: '500px' }}
        className={`bg-gradient-to-r from-cyan-700 to-blue-900 absolute w-full top-0 border -z-10`}
      />
      <Container>
        <HeroDetailMovie
          title={title}
          genres={genres}
          releaseDate={release_date}
          vote={vote_average}
          runtime={runtime}
          posterPath={poster_path}
          overview={overview}
          tagline={tagline}
          crew={crew}
        />
      </Container>
    </div>
  )
}

export default MovieDetail
