import { getDataById } from '../../services/services'
import { mapMovieObject } from '../../utils/transformFramework'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useDetailContent = props => {
  const { id } = useParams()

  const { type } = props

  const [movieObj, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    getDataById(type, id)
      .then(response => {
        // if (type === 'person') {
        //   setItemObject(personTransrofm(response, type))
        // } else {
        setMovie(mapMovieObject(response, type))
        // }
        setLoading(false)
      })
      .catch(e => {
        setError(e)
        setLoading(false)
      })
    window.scrollTo(0, 0)
  }, [id, type])

  return { movieObj, error, loading }
}
