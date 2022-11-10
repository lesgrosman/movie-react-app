import { Box, Grid } from '@material-ui/core'
import MovieBottomContent from './MovieContent/MovieBottomContent'
import MovieMainContent from './MovieContent/MovieMainContent'
import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

const MovieDetailSkeleton = () => {
  const imageNode = <Skeleton variant='rect' animation='wave' width={185} height={278} />

  const centralNode = (
    <>
      <Skeleton variant='text' animation='wave' width={140} height={50} />
      {[...Array(9).keys()].map((_, index) => (
        <Skeleton key={index} variant='text' width='80%' height={25} />
      ))}
    </>
  )

  const rightNode = (
    <>
      <Skeleton variant='text' width='70%' height={70} />
      {[...Array(10).keys()].map((_, index) => (
        <Skeleton key={index} variant='text' width='60%' height={30} />
      ))}
    </>
  )

  const similarNode = (
    <>
      <Skeleton variant='text' animation='wave' width={240} height={50} />
      <Grid container spacing={2}>
        {[...Array(6).keys()].map((_, index) => (
          <Grid item xs={2} key={index}>
            <Skeleton variant='rect' width={93} height={140} />
          </Grid>
        ))}
      </Grid>
    </>
  )

  const annotationNode = (
    <>
      <Skeleton variant='text' animation='wave' width={240} height={50} />
      <Box display='flex' flexDirection='column'>
        {[...Array(6).keys()].map((_, index) => (
          <Skeleton key={index} variant='text' animation='wave' width='90%' height={10} />
        ))}
      </Box>
    </>
  )

  const ratingNode = (
    <>
      <Skeleton variant='text' animation='wave' width={240} height={50} />
      <Grid container spacing={2}>
        {[...Array(10).keys()].map((_, index) => (
          <Grid key={index} item xs={1}>
            <Skeleton variant='circle' animation='wave' width={50} height={50} />
          </Grid>
        ))}
      </Grid>
    </>
  )

  const trailerNode = <Skeleton variant='rect' animation='wave' width={720} height={500} />

  return (
    <>
      <MovieMainContent imageNode={imageNode} centralNode={centralNode} rightNode={rightNode} />
      <MovieBottomContent
        similarNode={similarNode}
        annotationNode={annotationNode}
        ratingNode={ratingNode}
        trailerNode={trailerNode}
      />
    </>
  )
}
export default MovieDetailSkeleton
