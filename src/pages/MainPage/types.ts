import { MovieItemResponse, TVSeriesItemResponse } from '../../utils/types'

export type MovieListResponse = {
  results: MovieItemResponse[]
  page: number
  total_results: number
  total_pages: number
}

export type TVSeriesListResponse = {
  results: TVSeriesItemResponse[]
  page: number
  total_results: number
  total_pages: number
}
