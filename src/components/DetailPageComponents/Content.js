import React from 'react'
import { Grid, Fade } from '@material-ui/core'
import MovieBottomContent from './MovieContent/MovieBottomContent'
import MovieMainContent from './MovieContent/MovieMainContent'
import PersonMainContent from './PersonContent/PersonMainContent'
import PersonBottomContent from './PersonContent/PersonBottomContent'

const Content = ({ itemObject, type }) => {
  const MovieContent = (
    <>
      <MovieMainContent movie={itemObject} type={type}/>
      <MovieBottomContent movie={itemObject} type={type}/>
    </>
  )

  const PersonContent = (
    <>
      <PersonMainContent person={itemObject} type={type}/>
      <PersonBottomContent person={itemObject} type={type}/>
    </>
  )

  return (
    <Fade in={true} timeout={1000}>
      <Grid container>         
        { type === 'person' ? PersonContent : MovieContent }   
      </Grid>
    </Fade>
  )
}

export default Content