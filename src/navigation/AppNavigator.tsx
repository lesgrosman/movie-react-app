import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import MovieDetailPage from 'pages/DetailPage/MovieDetailPage'
import SearchResultPage from '../pages/SearchResultPage'
import TVSeriesDetailPage from 'pages/DetailPage/TVSeriesDetailPage'

const AppNavigator = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/movie/:id' element={<MovieDetailPage />} />
      <Route path='/tv/:id' element={<TVSeriesDetailPage />} />
      <Route path='/results:query' element={<SearchResultPage />} />
    </Routes>
  )
}

export default AppNavigator
