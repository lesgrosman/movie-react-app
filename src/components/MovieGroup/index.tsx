import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Carousel from '../Carousel/Carousel'
import Error from '../UI/Error/Error'
import MovieGroupSkeleton from './MovieGroupSkeleton'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import { useMovieGroup } from './useMovieGroup'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTypography-root': {
      textAlign: 'center',
      marginBottom: theme.typography.pxToRem(25),
    },
    '& .MuiTypography-root:first-child': {
      marginTop: theme.typography.pxToRem(25),
    },
  },
}))

interface Props {
  searchBy: string
  name: string
  param: string
  type: string
}

const MovieGroup = ({ name, searchBy, param = '', type }: Props) => {
  const classes = useStyles()

  const { movies, error, loading } = useMovieGroup({
    searchBy,
    param,
    type,
  })

  if (loading) return <MovieGroupSkeleton />

  if (error) return <Error error={error} />

  if (movies && movies.length < 1) {
    return <h3>It seems like there is no movies you are looking for...</h3>
  }

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{name}</Typography>
      <Carousel list={movies} similar={false} />
    </Box>
  )
}

export default React.memo(MovieGroup)
