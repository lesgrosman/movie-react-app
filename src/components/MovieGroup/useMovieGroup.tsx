import { MovieItem, Nullable } from 'utils/types'
import { getData } from '../../services/services'
import { getItems } from '../../utils/transformFramework'
import { useEffect, useState } from 'react'

interface Props {
  searchBy?: string
  param: string
  type: string
}

interface UseMovieGroup {
  loading: boolean
  error: boolean
  movies: Nullable<MovieItem[]>
}

export const useMovieGroup = ({ searchBy, param = '', type }: Props): UseMovieGroup => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    setError(false)
    setLoading(true)
    getData(searchBy, param) // Invoking the request depending on filters after
      .then(response => {
        const results = response.data.results
        setLoading(false)
        setMovies(getItems(results, type))
      })
      .catch(e => {
        setLoading(false)
        setError(e)
      })
  }, [param, searchBy, type])

  return { movies, error, loading }
}
