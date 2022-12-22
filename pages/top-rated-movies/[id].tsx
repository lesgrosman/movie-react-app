import { GetStaticPaths } from 'next'
import { MovieDetailResponse, Movies } from '../../src/utils/types'
import { QueryClient, dehydrate, useQueries } from '@tanstack/react-query'
import { QueryKeys } from '../../src/utils/constants'
import {
  fetchCredits,
  fetchDetail,
  fetchSimilar,
  fetchVideos,
} from '../../src/pages/DetailPage/queries'
import { getCountries, getCrewByJob, getGenres } from '../../src/pages/DetailPage/utils'
import { useRouter } from 'next/router'
import AboutTable from '../../src/components/DetailMovieLayout/AboutTable'
import Annotation from '../../src/pages/DetailPage/Components/Annotation'
import DetailMovieLayout from '../../src/components/DetailMovieLayout'
import Error from '../../src/components/UI/Error/Error'
import Image from '../../src/components/Image'
import MovieList from '../../src/pages/DetailPage/Components/MovieList'
import Rating from '../../src/pages/DetailPage/Components/Rating'
import React from 'react'
import RightSideList from '../../src/pages/DetailPage/Components/RightSideList'
import Seo from '../../src/components/Seo'
import Trailer from '../../src/pages/DetailPage/Components/Trailer'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const id = Array.isArray(query?.id) ? query?.id?.[0] : query?.id

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_DETAIL}`, id], () =>
      fetchDetail<MovieDetailResponse>(id as string, 'movie')
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_SIMILAR}`, id], () =>
      fetchSimilar<Movies>(id as string, 'movie')
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_CREDITS}`, id], () =>
      fetchCredits(id as string, 'movie')
    ),
    queryClient.prefetchQuery([`${QueryKeys.MOVIE_VIDEOS}`, id], () =>
      fetchVideos(id as string, 'movie')
    ),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const TopRatedMovieDetail = () => {
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

export default TopRatedMovieDetail