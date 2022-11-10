import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import MovieGroup from '../components/MovieGroup'
import React from 'react'

const SearchResultPage = () => {
  const { query } = useParams()
  return (
    <Box>
      <MovieGroup
        name='Search results'
        param={query}
        type='movie'
      />
    </Box>
  )
}

export default SearchResultPage
