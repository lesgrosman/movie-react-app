import { QueryKeys } from 'utils/constants'
import { genres } from 'utils/constants'
import { getMoviesByGenre, getPopularMovies, getPopularTVSeries } from './queries'
import MovieList from './MovieList'

const MainPage = () => {
  return (
    <div>
      <MovieList
        title='Popular movies'
        queryKey={QueryKeys.POPULAR_MOVIES_MAIN_GROUP}
        fetchFn={getPopularMovies}
      />
      <MovieList
        title='Popular TV Series'
        queryKey={QueryKeys.POPULAR_TV_MAIN_GROUP}
        fetchFn={getPopularTVSeries}
      />
      {genres.map(genre => (
        <MovieList
          key={genre.id}
          title={genre.name}
          queryKey={`${genre.name}-main-group`}
          fetchFn={() => getMoviesByGenre(genre.id)}
        />
      ))}
    </div>
  )
}

export default MainPage
