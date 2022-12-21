import { QueryKeys } from 'utils/constants'
import { genres } from 'utils/constants'
import { getPopularMovies, getPopularTVSeries } from './queries'
import GenreMovieList from './GenreMovieList'
import MovieList from './MovieList'
import PopularMovieList from './PopularMovieList'
import PopularTVSeriesList from './PopularTVSeriesList'

const MainPage = () => {
  return (
    <div>
      <MovieList
        title='Popular movies'
        queryKey={QueryKeys.POPULAR_MOVIES_MAIN_GROUP}
        fetchFn={getPopularMovies}
        type='movie'
      />
      {/* <MovieList
        title='Popular TV Series'
        queryKey={QueryKeys.POPULAR_TV_MAIN_GROUP}
        fetchFn={getPopularTVSeries}
      /> */}
      <PopularTVSeriesList />
      {genres.map(genre => (
        <GenreMovieList key={genre.id} genre={genre} />
      ))}
    </div>
  )
}

export default MainPage
