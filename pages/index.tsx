import { genres } from '../src/utils/constants'
import Box from '@material-ui/core/Box'
import GenreMovieList from '../src/pages/MainPage/GenreMovieList'
import PopularMovieList from '../src/pages/MainPage/PopularMovieList'
import PopularTVSeriesList from '../src/pages/MainPage/PopularTVSeriesList'
import React from 'react'

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
