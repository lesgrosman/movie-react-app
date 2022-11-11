import { BASE_IMAGE } from './constants'
import { MovieItem, MovieItemResponse, TVSeriesItemResponse } from './types'

export const fetcher = async <T>(input: RequestInfo, init?: RequestInit): Promise<T> => {
  const res = await fetch(input, {
    ...init,
  })

  const responseJson = await res.json()

  if (!res.ok && responseJson.errorText === 'Fields are in a wrong format')
    throw new Error(`${responseJson.errorCode} ${responseJson.errorText}`, {
      cause: {
        errorType: 'validation',
        errors: responseJson.errors,
      },
    })

  if (!res.ok) throw new Error(`Network request has failed with code ${res.status}`)

  return res.status !== 204 ? responseJson : null
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
      poster: item.poster_path ? `${BASE_IMAGE}${item.poster_path}` : '',
      itemType: 'movie',
    }
  })
}
