import Box from '@material-ui/core/Box'
import MovieGroup from '../../components/MovieGroup'
import React from 'react'
import shortid from 'shortid'

const MainPage = () => {
  // Array of 4 content groups. SearchBy and param are arguments for filtering requests(folder services)
  const groups = [
    {
      name: 'Popular Movies',
      searchBy: 'type',
      param: 'movie',
      type: 'movie',
    },
    {
      name: 'Popular Series',
      searchBy: 'type',
      param: 'tv',
      type: 'tv',
    },
    {
      name: 'Family',
      searchBy: 'genre',
      param: '10751',
      type: 'movie',
    },
    {
      name: 'Documentary',
      searchBy: 'genre',
      param: '99',
      type: 'movie',
    },
  ]

  return (
    <Box>
      {groups.map(item => (
        <MovieGroup
          key={shortid.generate()}
          searchBy={item.searchBy}
          name={item.name}
          param={item.param}
          type={item.type}
        />
      ))}
    </Box>
  )
}

export default MainPage
