import { Route, Routes } from 'react-router-dom'
import DetailPage from '../pages//DetailPage'
import ListPage from '../pages/ListPage'
import SearchResultPage from '../pages/SearchResultPage'

const AppNavigator = () => {
  return (
    <Routes>
      <Route path='/' element={<ListPage />} />
      <Route path='/movie/:id' element={<DetailPage type='movie' />} />
      <Route path='/tv/:id' element={<DetailPage type='tv' />} />
      <Route path='/person/:id' element={<DetailPage type='person' />} />
      <Route path='/results:query' element={<SearchResultPage />} />
    </Routes>
  )
}

export default AppNavigator
