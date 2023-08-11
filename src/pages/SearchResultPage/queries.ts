import { BASE_URL, QueryKeys } from 'utils/constants'
import { Movies } from 'utils/types'
import { fetcher } from 'helpers/api.helpers'
import { useQuery } from '@tanstack/react-query'

const getSearchMovies = async (param?: string) =>
  fetcher<Movies>(
    `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&query=${param}&page=1&include_adult=true`
  )

export const getSearchMoviesData = (param = '') =>
  useQuery([`${QueryKeys.SEARCH_MOVIES}`, param as string], () => getSearchMovies(param))
