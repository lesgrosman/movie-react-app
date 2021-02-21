import React, { useState, useEffect } from "react"
import Error from '../../components/UI/Error/Error'
import { getDataById } from '../../services/services'
import Loader from '../../components/UI/Loader/Loader'
import MovieContent from './MovieContent/MovieContent'
import { transform } from '../../frameworks/transformFramework'

const MovieDetailPage = ({ movieId, type }) => {

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
  }, [])


// Checking which content to shows

  const errorMessage = error ? <Error error={error}/>: null
  const spinner = loading ? <Loader/> : null
  const content = !(spinner || errorMessage) ? <MovieContent movie={movie} type={type} /> : null

  return (
    <div>
      {spinner}
      {errorMessage}
      {content}
    </div>
  )
}

export default MovieDetailPage
