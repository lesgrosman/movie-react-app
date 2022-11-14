import { AxiosError } from 'axios'
import { MovieItemResponse, Nullable, TVSeriesItemResponse } from 'utils/types'
import { transformToPreviewItems } from 'utils/helper'
import { useMemo } from 'react'
import Carousel from 'components/Carousel/Carousel'
import Error from '../UI/Error/Error'
import MovieGroupSkeleton from './MovieGroupSkeleton'

interface Props {
  data?: MovieItemResponse[] | TVSeriesItemResponse[]
  loading: boolean
  error?: Nullable<AxiosError>
  type?: 'movie' | 'tv'
}

const MovieGroup = ({ data, loading, error, type }: Props) => {
  if (loading) return <MovieGroupSkeleton />

  if (error || !data) return <Error error={error?.response?.status} />

  if (data?.length < 1) {
    return <h3>It seems like there are no movies you are looking for...</h3>
  }

  const transformedItems = useMemo(() => {
    return transformToPreviewItems(data)
  }, [data])

  return <Carousel list={transformedItems} type={type} />
}

export default MovieGroup
