import { MovieItemResponse, TVSeriesItemResponse } from 'utils/types'
import { transformToPreviewItems } from 'utils/helper'
import { useMemo } from 'react'
import Carousel from 'components/Carousel/Carousel'
import shortid from 'shortid'

interface Props {
  data?: MovieItemResponse[] | TVSeriesItemResponse[]
  loading: boolean
  error?: unknown
}

const MovieGroup = ({ data, loading, error }: Props) => {
  const transformedItems = useMemo(() => {
    return transformToPreviewItems(data)
  }, [data])

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

  if (error || !data) return <>Something went wrong. Please try again later</>

  if (data?.length < 1) {
    return <h1 className='text-center'>It seems like there are no movies you are looking for...</h1>
  }

  return <Carousel list={transformedItems} />
}

export default MovieGroup
