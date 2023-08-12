import { BASE_URL } from 'utils/constants'

import { MovieOrTv, Movies, TVSeries } from 'utils/types'
import { Results } from './types'
import { fetcher } from 'helpers/api.helpers'

interface Props {
  param?: string
  page: number
  type: MovieOrTv
}

export const getSearchResults = async ({ param, type }: { param?: string; type: MovieOrTv }) =>
  fetcher<Results>(
    `${BASE_URL}/search/${type}?language=en-US&query=${param}&page=1&include_adult=false`
  )

export const getSearchItems = async ({ param, page, type }: Props) =>
  fetcher<Movies | TVSeries>(
    `${BASE_URL}/search/${type}?language=en-US&query=${param}&page=${page}&include_adult=false`
  )
