import { genres } from '../src/utils/constants'
import GenreMovieList from '../src/pages/MainPage/GenreMovieList'
import PopularMovieList from '../src/pages/MainPage/PopularMovieList'
import PopularTVSeriesList from '../src/pages/MainPage/PopularTVSeriesList'
import React from 'react'

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
