import { QueryKeys } from '../../src/utils/constants'
import { TVSeries, TVSeriesDetailResponse } from '../../src/utils/types'
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

const TVDetailPage = () => {
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

  if (allDataResponse.some(data => data.isLoading)) return <MovieDetailSkeleton />

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data.data)) {
    return <Error error={404} />
  }

  const tv = allDataResponse[0]?.data
  const similar = allDataResponse[1]?.data?.results
  const crew = allDataResponse[2]?.data?.crew
  const cast =
    allDataResponse[2]?.data?.cast?.map(el => {
      return { id: el.id, name: el.name }
    }) || []
  const trailerUrl = allDataResponse[3]?.data?.results.find(video => video.key)?.key

  const imageNode = (
    <Image imageUrl={tv?.poster_path} className='rounded-xl' width={185} height={278} />
  )

  const centralNode = (
    <>
      <Typography variant='h4'>{tv?.name}</Typography>
      <AboutTable
        year={tv?.first_air_date}
        countries={getCountries(tv?.production_countries)}
        genres={getGenres(tv?.genres)}
        tagline={tv?.tagline}
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
      rankAverage={tv?.vote_average}
      rankCount={tv?.vote_count}
    />
  )

  const similarNode = <MovieList title='Similar TV Series' list={similar} />

  const annotationNode = <Annotation title='Annotation' content={tv?.overview} />

  const ratingNode = (
    <Rating title='Rating' rankAverage={tv?.vote_average} rankCount={tv?.vote_count} />
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

export default TVDetailPage
