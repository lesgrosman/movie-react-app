import { AxiosError } from 'axios'
import { MovieItemResponse, Nullable, TVSeriesItemResponse } from 'utils/types'
import { transformToPreviewItems } from 'utils/helper'
import { useMemo } from 'react'
import Carousel from 'components/Carousel/Carousel'
import Error from '../UI/Error/Error'
import shortid from 'shortid'

interface Props {
  data?: MovieItemResponse[] | TVSeriesItemResponse[]
  loading: boolean
  error?: Nullable<AxiosError>
}

const MovieGroup = ({ data, loading, error }: Props) => {
  if (loading && !data) {
    return (
      <div className='flex gap-4 animate-pulse mb-4'>
        {new Array(6).fill(1).map(() => (
          <div
            key={shortid.generate()}
            className='bg-slate-200 rounded-xl'
            style={{ width: 185, height: 278 }}
          />
        ))}
      </div>
    )
  }

  if (error || !data) return <Error error={error?.response?.status} />

  if (data?.length < 1) {
    return <h1 className='text-center'>It seems like there are no movies you are looking for...</h1>
  }

  const transformedItems = useMemo(() => {
    return transformToPreviewItems(data)
  }, [data])

  return <Carousel list={transformedItems} />
}

export default MovieGroup
