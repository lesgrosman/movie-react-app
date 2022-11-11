import { BASE_IMAGE, QueryKeys } from 'utils/constants'
import { TVSeries, TVSeriesDetailResponse } from 'utils/types'
import { Typography } from '@material-ui/core'
import { fetchCredits, fetchDetail, fetchSimilar, fetchVideos } from '../queries'
import { getCountries, getCrewByJob, getGenres } from '../utils'
import { useParams } from 'react-router-dom'
import { useQueries } from '@tanstack/react-query'
import { useStyles } from '../styles'
import AboutTable from 'components/DetailMovieLayout/AboutTable'
import Annotation from '../Components/Annotation'
import DetailMovieLayout from 'components/DetailMovieLayout'
import Error from 'components/UI/Error/Error'
import Image from 'components/Image'
import MovieDetailSkeleton from 'components/DetailMovieLayout/MovieDetailSkeleton'
import MovieList from '../Components/MovieList'
import Rating from '../Components/Rating'
import RightSideList from '../Components/RightSideList'
import Trailer from '../Components/Trailer'

const TVDetailPage = () => {
  const { id } = useParams()
  const classes = useStyles()

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.MOVIE_DETAIL}`, id],
        queryFn: () => fetchDetail<TVSeriesDetailResponse>(id, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_SIMILAR}`, id],
        queryFn: () => fetchSimilar<TVSeries>(id, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_CREDITS}`, id],
        queryFn: () => fetchCredits(id, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_VIDEOS}`, id],
        queryFn: () => fetchVideos(id, 'tv'),
      },
    ],
  })

  if (allDataResponse.some(data => data.isLoading)) return <MovieDetailSkeleton />

  if (allDataResponse.some(data => data.error) || allDataResponse.some(data => !data.data)) {
    return <Error error={allDataResponse.some(data => data.error)} />
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
    <Image
      imageUrl={`${BASE_IMAGE}${tv?.poster_path}`}
      className={classes.image}
      width={185}
      height={278}
    />
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
