import { getMovieGenresData, getRatedMoviesData, getRatedTvData, getTvGenresData } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import View from './View'

const Statistics = () => {
  const { session, accountId } = useAuthContext()

  const { data: ratedMovies } = getRatedMoviesData({ session, accountId })

  const { data: ratedTV } = getRatedTvData({ session, accountId })

  const { data: movieGenres } = getMovieGenresData()

  const { data: tvGenres } = getTvGenresData()

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
