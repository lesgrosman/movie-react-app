import { fetcher } from 'utils/helper'

export const getMovieList = async <T>(url: string): Promise<T> => fetcher(url)
