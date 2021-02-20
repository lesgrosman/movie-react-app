import React, {useState, useEffect} from 'react'
import Carousel from '../Carousel/Carousel'
import Error from '../UI/Error/Error'
import { getData } from '../../services/services'
import Loader from '../UI/Loader/Loader'
import classes from './MovieGroup.module.css'

// MovieGroup is a container for Carousel. Requests are called here 
const MovieGroup = ({ name, searchBy, param = null }) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [noData, setnoData] = useState(false)
  const [list, setList] = useState([])


  useEffect(() => {
    setError(false)
    setLoading(true)
    setnoData(false)
    getData(searchBy, param) // Invoking the request depending on filters after 
      .then(response => {
        const results = response.data.results
        setLoading(false)
        results.length > 0 ? setList(results) : setnoData(true)
      })
      .catch(e => {
        setLoading(false)
        setError(e)
      })
  }, [param, searchBy])


  const errorMessage = error ? <Error error={error}/> : null 
  const spinner = loading ? <Loader/> : null
  const noResults = noData ? <h3>It seems like there is no movies you are looking for :(</h3> : null
  const content = !(spinner || errorMessage || noResults) ? <Carousel movies={list}/> : null

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

export default MovieGroup
