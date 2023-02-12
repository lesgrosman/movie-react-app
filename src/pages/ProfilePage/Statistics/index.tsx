import {
  QueryType,
  RatedMovieItemResponse,
  RatedTVSeriesItemResponse,
  SimpleItem,
} from '@utils/types'
import { getGenres, getListItems } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import View from './View'

const Statistics = () => {
  const { session, accountId } = useAuthContext()

  const { data: ratedMovies }: QueryType<{ results: RatedMovieItemResponse[] }> = useQuery(
    [`rated-movies`],
    () => getListItems(session, accountId, 'rated', 'movies')
  )

  const { data: ratedTV }: QueryType<{ results: RatedTVSeriesItemResponse[] }> = useQuery(
    [`rated-tv`],
    () => getListItems(session, accountId, 'rated', 'tv')
  )

  const { data: movieGenres }: QueryType<{ genres: SimpleItem[] }> = useQuery(
    ['movie-genres'],
    () => getGenres('movie')
  )

  const { data: tvGenres }: QueryType<{ genres: SimpleItem[] }> = useQuery(['tv-genres'], () =>
    getGenres('tv')
  )

  if (!ratedMovies || !ratedTV || !movieGenres || !tvGenres) return null

  return (
    <div className='w-full'>
      <h1>Statistics</h1>
      <View
        movies={ratedMovies}
        tv={ratedTV}
        allGenres={[...movieGenres.genres, ...tvGenres.genres]}
      />
    </div>
  )
}

export default Statistics
