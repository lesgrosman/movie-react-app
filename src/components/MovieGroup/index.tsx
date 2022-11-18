import { AxiosError } from 'axios'
import { MovieItemResponse, Nullable, TVSeriesItemResponse } from 'utils/types'
import { transformToPreviewItems } from 'utils/helper'
import { useMemo } from 'react'
import Carousel from 'components/Carousel/Carousel'
import Error from '../UI/Error/Error'

interface Props {
  data?: MovieItemResponse[] | TVSeriesItemResponse[]
  loading: boolean
  error?: Nullable<AxiosError>
  type?: 'movie' | 'tv'
}

const MovieGroup = ({ data, loading, error, type }: Props) => {
  if (loading) return <h1 className='text-center'>Loading...</h1>

  if (error || !data) return <Error error={error?.response?.status} />

  if (data?.length < 1) {
    return <h1 className='text-center'>It seems like there are no movies you are looking for...</h1>
  }

  const transformedItems = useMemo(() => {
    return transformToPreviewItems(data)
  }, [data])

  return <Carousel list={transformedItems} type={type} />
}

export default MovieGroup
