import React, { useState, useEffect } from 'react'
import { getData } from '../../services/services'
import Carousel from '../Carousel/Carousel'
import Error from '../UI/Error/Error'
import Loader from '../UI/Loader/Loader'
import classes from './MovieGroup.module.css'

// MovieGroup is a container for Carousel. Requests are called here 
const MovieGroup = ({ name, searchBy, param = null }) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [noData, setNoData] = useState(false)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    setError(false)
    setLoading(true)   
    setNoData(false)
    getData(searchBy, param) // Invoking the request depending on filters after 
      .then(response => {
        const results = response.data.results
        setLoading(false)
        results.length > 0 ? setMovies(results) : setNoData(true)
      })
      .catch(e => {
        setLoading(false)
        setError(e)
      })
  }, [param, searchBy, name])

  const errorMessage = error ? <Error error={error}/> : null 
  const spinner = loading ? <Loader/> : null
  const noResults = noData ? <h3>It seems like there is no movies you are looking for :(</h3> : null
  const content = !(spinner || errorMessage || noResults) ? <Carousel list={movies}/> : null
  return (
    <div className={classes.Container}>
      <h1>{name}</h1>
      {spinner}
      {errorMessage}
      {noResults}
      {content}
    </div>
  )
}

export default React.memo(MovieGroup)
