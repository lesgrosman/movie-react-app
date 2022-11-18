import { BASE_IMAGE, QueryKeys } from '../../src/utils/constants'
import { MovieDetailResponse, Movies } from '../../src/utils/types'
import { Typography } from '@material-ui/core'
import {
  fetchCredits,
  fetchDetail,
  fetchSimilar,
  fetchVideos,
} from '../../src/pages/DetailPage/queries'
import { getCountries, getCrewByJob, getGenres } from '../../src/pages/DetailPage/utils'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useStyles } from '../../src/pages/DetailPage/styles'
import AboutTable from '../../src/components/DetailMovieLayout/AboutTable'
import Annotation from '../../src/pages/DetailPage/Components/Annotation'
import DetailMovieLayout from '../../src/components/DetailMovieLayout'
import Error from '../../src/components/UI/Error/Error'
import Image from '../../src/components/Image'
import MovieDetailSkeleton from '../../src/components/DetailMovieLayout/MovieDetailSkeleton'
import MovieList from '../../src/pages/DetailPage/Components/MovieList'
import Rating from '../../src/pages/DetailPage/Components/Rating'
import React from 'react'
import RightSideList from '../../src/pages/DetailPage/Components/RightSideList'
import Trailer from '../../src/pages/DetailPage/Components/Trailer'

const MovieDetailPage = () => {
  const router = useRouter()
  const classes = useStyles()

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

  if (allDataResponse.some(data => data.isLoading)) return <MovieDetailSkeleton />

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
      imageUrl={`${BASE_IMAGE}${movie?.poster_path}`}
      className={classes.image}
      width={185}
      height={278}
    />
  )

  const centralNode = (
    <>
      <Typography variant='h4'>{movie?.title}</Typography>
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
    <DetailMovieLayout
      imageNode={imageNode}
      centralNode={centralNode}
      rightNode={rightNode}
      similarNode={similarNode}
      annotationNode={annotationNode}
      ratingNode={ratingNode}
      trailerNode={trailerNode}
    />
  )
}

export default MovieDetailPage
