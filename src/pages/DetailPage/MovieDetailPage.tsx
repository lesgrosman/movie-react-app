import { MovieDetailResponse, Movies } from 'utils/types'
import { QueryKeys } from 'utils/constants'
import { fetchCredits, fetchDetail, fetchSimilar, fetchVideos } from './queries'
import { getCountries, getCrewByJob, getGenres } from './utils'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import AboutTable from 'components/DetailMovieLayout/AboutTable'
import Annotation from './Components/Annotation'
import DetailMovieLayout from 'components/DetailMovieLayout'
import Error from 'components/UI/Error/Error'
import Image from 'components/Image'
import MovieList from './Components/MovieList'
import Rating from './Components/Rating'
import React from 'react'
import RightSideList from './Components/RightSideList'
import Seo from 'components/Seo'
import Trailer from './Components/Trailer'

const MovieDetailPage = () => {
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

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data.data)) {
    return <Error error={404} />
  }

  const movie = allDataResponse[0]?.data
  const similar = allDataResponse[1]?.data?.results
  const crew = allDataResponse[2]?.data?.crew
  const cast =
    allDataResponse[2]?.data?.cast?.map(el => {
      return { id: el.id, name: el.name }
    }) || []
  const trailerUrl = allDataResponse[3]?.data?.results.find(video => video.key)?.key

  const imageNode = (
    <Image
      src={movie?.poster_path || ''}
      alt={movie?.title || ''}
      className='rounded-xl'
      width={185}
      height={278}
      priority
    />
  )

  const centralNode = (
    <>
      <h2>{movie?.title}</h2>
      <AboutTable
        year={movie?.release_date}
        countries={getCountries(movie?.production_countries)}
        genres={getGenres(movie?.genres)}
        tagline={movie?.tagline}
        directors={getCrewByJob(crew, 'Director')}
        writers={getCrewByJob(crew, 'ScreenPlay')}
        producers={getCrewByJob(crew, 'Producer')}
      />
    </>
  )

  const rightNode = (
    <RightSideList
      title='Cast'
      list={cast}
      rankAverage={movie?.vote_average}
      rankCount={movie?.vote_count}
    />
  )

  const similarNode = <MovieList title='Similar Movies' list={similar} />

  const annotationNode = <Annotation title='Annotation' content={movie?.overview} />

  const ratingNode = (
    <Rating title='Rating' rankAverage={movie?.vote_average} rankCount={movie?.vote_count} />
  )

  const trailerNode = <Trailer trailerUrl={trailerUrl} />

  return (
    <>
      <Seo title={movie?.title} description={movie?.overview} imageUrl={movie?.poster_path} />
      <DetailMovieLayout
        imageNode={imageNode}
        centralNode={centralNode}
        rightNode={rightNode}
        similarNode={similarNode}
        annotationNode={annotationNode}
        ratingNode={ratingNode}
        trailerNode={trailerNode}
      />
    </>
  )
}

export default MovieDetailPage
