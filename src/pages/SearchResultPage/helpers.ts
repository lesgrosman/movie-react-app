import { BASE_URL } from 'utils/constants'
import { Movies, TVSeries } from 'utils/types'
import { fetcher } from 'helpers/api.helpers'

interface Props {
  param?: string
  page?: number
}

export const getSearchMovies = async ({ param, page = 1 }: Props) =>
  fetcher<Movies>(
    `${BASE_URL}/search/movie?language=en-US&query=${param}&page=${page}&include_adult=false`
  )

export const getSearchTv = async ({ param, page = 1 }: Props) =>
  fetcher<TVSeries>(
    `${BASE_URL}/search/tv?language=en-US&query=${param}&page=${page}&include_adult=false`
  )
