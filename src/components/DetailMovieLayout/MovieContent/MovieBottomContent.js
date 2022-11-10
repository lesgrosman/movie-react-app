import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  rootBottom: {
    display: 'flex',
    paddingTop: '30px',
    paddingLeft: '25px',
  },
  leftBottomSide: {
    display: 'flex',
    flexDirection: 'column',
  },
  similarMovies: {
    width: '100%',
    marginBottom: '20px',
  },
  bottomBlock: {
    marginBottom: '20px',
  },
  bottomTitle: {
    marginBottom: '15px',
    fontWeight: 500,
  },
  rankStars: {
    display: 'flex',
    alignItems: 'flex-end',
  },
})

const MovieBottomContent = props => {
  const classes = useStyles()

  const { similarNode, annotationNode, ratingNode, trailerNode } = props

  return (
    <Grid className={classes.rootBottom} item container>
      <Grid className={classes.leftBottomSide} item container md={8}>
        <Grid className={classes.similarMovies} item>
          {similarNode}
        </Grid>
        <Grid className={classes.bottomBlock} item>
          {annotationNode}
        </Grid>
        <Grid className={classes.bottomBlock} item>
          {ratingNode}
        </Grid>
        <Grid className={classes.bottomBlock} item>
          {trailerNode}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieBottomContent
