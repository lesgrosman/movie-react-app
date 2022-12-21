import { BASE_URL } from 'utils/constants'
import { Movies } from 'utils/types'
import { fetcher } from 'utils/helper'

export const getTopRatedMovies = async (): Promise<Movies> =>
  fetcher(
    `${BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )
