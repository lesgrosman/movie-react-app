import { BASE_IMAGE, QueryKeys } from 'utils/constants'
import { MovieDetailResponse, Movies } from 'utils/types'
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

const MovieDetailPage = () => {
  const { id } = useParams()
  const classes = useStyles()

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.MOVIE_DETAIL}`, id],
        queryFn: () => fetchDetail<MovieDetailResponse>(id, 'movie'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_SIMILAR}`, id],
        queryFn: () => fetchSimilar<Movies>(id, 'movie'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_CREDITS}`, id],
        queryFn: () => fetchCredits(id, 'movie'),
      },
      {
        queryKey: [`${QueryKeys.MOVIE_VIDEOS}`, id],
        queryFn: () => fetchVideos(id, 'movie'),
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
