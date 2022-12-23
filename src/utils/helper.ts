import { MovieItem, MovieItemResponse, TVSeriesItemResponse } from './types'
import axios from 'axios'

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url)
  return data
}

export const transformToPreviewItems = (
  arr?: MovieItemResponse[] | TVSeriesItemResponse[]
): MovieItem[] => {
  if (!arr) return []
  return arr?.map(item => {
    return {
      id: item.id,
      title: 'title' in item ? item.title : item.name,
      rankAverage: item.vote_average,
      poster: item.poster_path ? item.poster_path : '',
      itemType: 'release_date' in item ? 'movie' : 'tv',
      date: 'release_date' in item ? item.release_date : item.first_air_date,
    }
  })
}
