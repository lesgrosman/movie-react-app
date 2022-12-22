import { QueryKeys } from 'utils/constants'
import { TVSeries, TVSeriesDetailResponse } from 'utils/types'
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
import RightSideList from './Components/RightSideList'
import Seo from 'components/Seo'
import Trailer from './Components/Trailer'

const TVDetailPage = () => {
  const router = useRouter()

  const { id } = router.query

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.TV_DETAIL}`, id],
        queryFn: () => fetchDetail<TVSeriesDetailResponse>(id as string, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.TV_SIMILAR}`, id],
        queryFn: () => fetchSimilar<TVSeries>(id as string, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.TV_CREDITS}`, id],
        queryFn: () => fetchCredits(id as string, 'tv'),
      },
      {
        queryKey: [`${QueryKeys.TV_VIDEOS}`, id],
        queryFn: () => fetchVideos(id as string, 'tv'),
      },
    ],
  })

  if (allDataResponse.some(data => data.isLoading)) return <h1>Loading...</h1>

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
    <Image
      src={tv?.poster_path || ''}
      alt={tv?.name || ''}
      className='rounded-xl'
      width={185}
      height={278}
    />
  )

  const centralNode = (
    <>
      <h2>{tv?.name}</h2>
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
    <>
      <Seo title={tv?.name} description={tv?.overview} imageUrl={tv?.poster_path} />
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

export default TVDetailPage
