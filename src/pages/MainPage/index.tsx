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
        type='movie'
      />
      <MovieList
        title='Popular TV Series'
        queryKey={QueryKeys.POPULAR_TV_MAIN_GROUP}
        fetchFn={getPopularTVSeries}
        type='tv'
      />
      {genres.map(genre => (
        <MovieList
          key={genre.id}
          title={genre.name}
          queryKey={`${genre.name}-main-group`}
          fetchFn={() => getMoviesByGenre(genre.id)}
          type='movie'
        />
      ))}
    </div>
  )
}

export default MainPage
