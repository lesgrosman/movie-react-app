import { MovieItem, MovieItemResponse, TVSeriesItemResponse } from './types'
import { toast } from 'react-toastify'
import axios from 'axios'

export const fetcher = async (url: string) => {
  const { data } = await axios.get(url)

  if (data.success === false) {
    const { status_message: message } = data
    throw new Error(message)
  }

  return data
}

export const sender = async <T>(url: string, dto: T) => {
  const { data } = await axios.post(url, dto)

  if (data.success === false) {
    const { status_message: message } = data
    throw new Error(message)
  }

  return data
}

export const remover = async (url: string) => {
  const { data } = await axios.delete(url)

  if (data.success === false) {
    const { status_message: message } = data
    throw new Error(message)
  }

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

export const showNofication = (message: string, type: 'success' | 'error') =>
  toast(message, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    type,
  })
