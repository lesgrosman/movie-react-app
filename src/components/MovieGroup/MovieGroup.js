import React, {useState, useEffect} from 'react'
import Carousel from '../Carousel/Carousel'
import Error from '../UI/Error/Error'
import { getData } from '../../services/services'
import Loader from '../UI/Loader/Loader'
import classes from './MovieGroup.module.css'

// MovieGroup is a container for Carousel. Requests are called here 
const MovieGroup = ({ name, searchBy, param = null }) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [list, setList] = useState([])


  useEffect(() => {
    setLoading(true)
    setError(false)
    getData(searchBy, param) // Invoking the request depending on filters after 
      .then(response => {
        setLoading(false) 
        setList(response.data.results)
      })
      .catch(e => {
        setLoading(false)
        setError(e)
      })
  }, [param, searchBy])

  const errorMessage = error ? <Error error={error}/>: null
  const spinner = loading ? <Loader/> : null
  const content = !(spinner || errorMessage) ? <Carousel movies={list}/> : null

  return (
    <div className={classes.Container}>
      <h1>{name}</h1>
      {spinner}
      {errorMessage}
      { 
        list.length > 0 
        ? content 
        : <h3>Error status 422. It seems like there is no movies you are looking for :(</h3>
      }
    </div>
  )
}

export default MovieGroup
