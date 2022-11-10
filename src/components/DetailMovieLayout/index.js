import { Fade, Grid } from '@material-ui/core'
import MovieBottomContent from './MovieContent/MovieBottomContent'
import MovieMainContent from './MovieContent/MovieMainContent'
import React from 'react'

const Content = props => {
  const {
    imageNode,
    centralNode,
    rightNode,
    similarNode,
    annotationNode,
    ratingNode,
    trailerNode,
  } = props

  const MovieContent = (
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

  return (
    <Fade in={true} timeout={1000}>
      <Grid container>{MovieContent}</Grid>
    </Fade>
  )
}

export default Content
