import { BASE_URL } from 'utils/constants'
import { Movies } from 'utils/types'
import { fetcher } from 'utils/helper'

export const searchMovies = async (param?: string): Promise<Movies> =>
  fetcher(
    `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&query=${param}&page=1&include_adult=true`
  )
