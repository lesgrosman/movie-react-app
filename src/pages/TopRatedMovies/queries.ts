import { BASE_URL } from 'utils/constants'
import { MovieListResponse } from 'pages/MainPage/types'
import { fetcher } from 'utils/helper'

export const getTopRatedMovies = async (): Promise<MovieListResponse> =>
  fetcher(
    `${BASE_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )
