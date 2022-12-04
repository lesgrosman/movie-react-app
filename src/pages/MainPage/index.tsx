import { genres } from 'utils/constants'
import GenreMovieList from './GenreMovieList'
import PopularMovieList from './PopularMovieList'
import PopularTVSeriesList from './PopularTVSeriesList'

const MainPage = () => {
  return (
    <div>
      <PopularMovieList />
      <PopularTVSeriesList />
      {genres.map(genre => (
        <GenreMovieList key={genre.id} genre={genre} />
      ))}
    </div>
  )
}

export default MainPage
