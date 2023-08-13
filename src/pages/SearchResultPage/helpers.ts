import { BASE_URL } from 'utils/constants'
import { Results, SearchType } from './types'
import { fetcher } from 'helpers/api.helpers'

interface Props {
  param?: string
  page: number
  type: SearchType
}

export const getSearchResults = async ({ param, type }: { param?: string; type: SearchType }) =>
  fetcher<Results>(
    `${BASE_URL}/search/${type}?language=en-US&query=${param}&page=1&include_adult=false`
  )

export const getSearchItems = async <T>({ param, page, type }: Props) =>
  fetcher<T>(
    `${BASE_URL}/search/${type}?language=en-US&query=${param}&page=${page}&include_adult=false`
  )
