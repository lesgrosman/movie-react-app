import React, { useState, useEffect } from "react"
import { Grid } from '@material-ui/core'
import Error from '../components/UI/Error/Error'
import { getDataById } from '../services/services'
import Loader from '../components/UI/Loader/Loader'
import Content from '../components/DetailPageComponents/Content'
import { movieTransform } from '../frameworks/transformFramework'
import { personTransrofm } from '../frameworks/personTransformFramework'

const DetailPage = ({ id, type }) => {

  const [itemObject, setItemObject] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => { 
    getDataById(type, id) 
      .then(response => {
        if (type === 'person') {
          setItemObject(personTransrofm(response, type))
        } else {
          setItemObject(movieTransform(response, type))
        }
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
        setError(e)
        setLoading(false)
      })
    window.scrollTo(0, 0)
  }, [id])

  const errorMessage = error ? <Error error={error}/>: null
  const spinner = loading ? <Loader/> : null
  const content = !(spinner || errorMessage) ? <Content itemObject={itemObject} type={type} /> : null

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
