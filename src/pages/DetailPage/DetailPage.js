import React, { useState, useEffect } from "react"
import { Grid } from '@material-ui/core'
import Error from '../../components/UI/Error/Error'
import { getDataById } from '../../services/services'
import Loader from '../../components/UI/Loader/Loader'
import MovieContent from './MovieContent/MovieContent'
import { transform } from '../../frameworks/transformFramework'

const DetailPage = ({ movieId, type }) => {

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => { // After render getting the movie or tv info (depending on type) and trailer from YT
    getDataById(type, movieId) 
      .then(response => {
        setMovie(transform(response, type))
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
        setError(e)
        setLoading(false)
      })
    window.scrollTo(0, 0)
  }, [])

  const errorMessage = error ? <Error error={error}/>: null
  const spinner = loading ? <Loader/> : null
  const content = !(spinner || errorMessage) ? <MovieContent movie={movie} type={type} /> : null

  return (
    <Grid container>
      <Grid item md={1}/>
      <Grid item md={10}>
        <div>
          {spinner}
          {errorMessage}
          {content}
        </div>
      </Grid>
      <Grid item md={1}/>
    </Grid>
  )
}

export default DetailPage
