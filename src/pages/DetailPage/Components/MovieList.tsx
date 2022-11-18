import { MovieItemResponse, TVSeriesItemResponse } from 'utils/types'
import { transformToPreviewItems } from 'utils/helper'
import Carousel from 'components/Carousel/Carousel'
import React from 'react'

type Props = {
  title: string
  list?: MovieItemResponse[] | TVSeriesItemResponse[]
}

const MovieList = ({ title, list }: Props) => {
  const transformedList = transformToPreviewItems(list)
  return (
    <>
      <h3 className='mb-4'>{title}</h3>
      <Carousel list={transformedList} similar />
    </>
  )
}

export default MovieList
