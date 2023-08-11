import { Movies, TVSeries } from '@utils/types'
import { fetcher } from 'helpers/api.helpers'

export const getMovieList = async (url: string): Promise<Movies | TVSeries> =>
  fetcher<Movies | TVSeries>({ url })
