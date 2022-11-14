import { genres } from 'utils/constants'
import Box from '@material-ui/core/Box'
import GenreMovieList from './GenreMovieList'
import PopularMovieList from './PopularMovieList'
import PopularTVSeriesList from './PopularTVSeriesList'

const MainPage = () => {
  return (
    <Box>
      <PopularMovieList />
      <PopularTVSeriesList />
      {genres.map(genre => (
        <GenreMovieList key={genre.id} genre={genre} />
      ))}
    </Box>
  )
}

export default MainPage
