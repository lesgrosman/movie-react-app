import { MovieItemResponse } from '../../utils/types'

export type MovieListResponse = {
  results: MovieItemResponse[]
  page: number
  total_results: number
  total_pages: number
}
