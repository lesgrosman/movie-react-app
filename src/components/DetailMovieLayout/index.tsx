import { Fade, Grid } from '@material-ui/core'
import MovieBottomContent from './MovieContent/MovieBottomContent'
import MovieMainContent from './MovieContent/MovieMainContent'
import React from 'react'

interface Props {
  imageNode: React.ReactNode
  centralNode: React.ReactNode
  rightNode: React.ReactNode
  similarNode: React.ReactNode
  annotationNode: React.ReactNode
  ratingNode: React.ReactNode
  trailerNode: React.ReactNode
}

const Content = ({
  imageNode,
  centralNode,
  rightNode,
  similarNode,
  annotationNode,
  ratingNode,
  trailerNode,
}: Props) => {
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
