import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import MovieGroup from '../components/MovieGroup';

const SearchResultPage = () => {
  const { query } = useParams();
  return (
    <Box>
      <MovieGroup
        name="Search results"
        param={query}
        type="movie"
      />
    </Box>
  )
}

export default SearchResultPage