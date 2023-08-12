import { QueryKeys } from 'utils/constants'
import { getSearchMovies, getSearchTv } from './helpers'
import { useQuery } from '@tanstack/react-query'

export const getSearchMoviesData = (param = '') =>
  useQuery([`${QueryKeys.SEARCH_MOVIES}`, param as string], () => getSearchMovies({ param }))

export const getSearchTvData = (param = '') =>
  useQuery([`${QueryKeys.SEARCH_TV}`, param as string], () => getSearchTv({ param }))
