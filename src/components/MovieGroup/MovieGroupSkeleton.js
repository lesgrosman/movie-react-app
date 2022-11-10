import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    marginBottom: theme.typography.pxToRem(25),
  },
}))

const MovieGroupSkeleton = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Skeleton animation='wave' variant='text' height={70} width='25%' />
      </Box>
      <Grid container spacing={2}>
        {[...Array(6).keys()].map(i => (
          <Grid item xs={6} md={2} key={i} className={classes.card}>
            <Skeleton animation='wave' variant='rect' width={185} height={278} />
            <Skeleton animation='wave' variant='text' height={30} width={185} />
            <Skeleton animation='wave' variant='text' height={30} width={185} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default MovieGroupSkeleton
