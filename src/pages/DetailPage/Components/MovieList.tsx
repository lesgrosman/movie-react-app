import { MovieItemResponse, TVSeriesItemResponse } from 'utils/types'
import { Typography } from '@material-ui/core'
import { transformToPreviewItems } from 'utils/helper'
import { useStyles } from '../styles'
import Carousel from 'components/Carousel/Carousel'
import React from 'react'

type Props = {
  title: string
  list?: MovieItemResponse[] | TVSeriesItemResponse[]
}

const MovieList = ({ title, list }: Props) => {
  const classes = useStyles()
  const transformedList = transformToPreviewItems(list)
  return (
    <>
      <Typography className={classes.bottomTitle} variant='h5'>
        {title}
      </Typography>
      <Carousel list={transformedList} similar />
    </>
  )
}

export default MovieList
