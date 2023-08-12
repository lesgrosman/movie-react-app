import { getMovieList } from './helpers'
import { useQuery } from '@tanstack/react-query'

export const getMovieListData = ({ url, key }: { url: string; key: string }) =>
  useQuery([key], () => getMovieList(url))
