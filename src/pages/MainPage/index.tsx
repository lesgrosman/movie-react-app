import { genres } from 'utils/constants'
import Box from '@material-ui/core/Box'
import GenreMovieGroup from './GenreMovieGroup'
import PopularMovieGroup from './PopularMovieGroup'
import PopularTVSeriesGroup from './PopularTVSeriesGroup'

const MainPage = () => {
  return (
    <Box>
      <PopularMovieGroup />
      <PopularTVSeriesGroup />
      {genres.map(genre => (
        <GenreMovieGroup key={genre.id} genre={genre} />
      ))}
    </Box>
  )
}

export default MainPage
