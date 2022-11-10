import { MovieDetail, Nullable } from 'utils/types'
import { getDataById } from '../../services/services'
import { mapMovieObject, mapTVSeriesObject } from '../../utils/transformFramework'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Props {
  type: string
}

interface UseDetailContent {
  error: boolean
  loading: boolean
  movieObj: Nullable<MovieDetail>
}

export const useDetailContent = ({ type }: Props): UseDetailContent => {
  const { id } = useParams()

  const [movieObj, setMovie] = useState<Nullable<MovieDetail>>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    getDataById(type, id)
      .then(response => {
        setMovie(
          type === 'movie' ? () => mapMovieObject(response) : () => mapTVSeriesObject(response)
        )
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
