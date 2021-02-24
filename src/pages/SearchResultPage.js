import React from 'react'
import MovieGroup from '../components/MovieGroup/MovieGroup'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    height: '700px',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
  }
}));

const SearchResultPage = ({query}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
        <MovieGroup
        name="Search results"
        param={query}/>
    </div>
  )
}

export default SearchResultPage