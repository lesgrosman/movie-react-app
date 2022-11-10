import { Route } from 'react-router-dom'
import DetailPage from './DetailPage'
import ListPage from './ListPage'
import React from 'react'
import SearchResultPage from './SearchResultPage'

const MainAppPage = () => {
  return (
    <>
      <Route path='/' exact component={ListPage} />
      <Route path='/movie/:id' render={() => <DetailPage type='movie' />} />
      <Route path='/tv/:id' render={() => <DetailPage type='tv' />} />

      <Route path='/person/:id' render={() => <DetailPage type='person' />} />
      <Route path='/results:query' component={SearchResultPage} />
    </>
  )
}

export default MainAppPage
