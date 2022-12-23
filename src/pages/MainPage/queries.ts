import { BASE_URL } from 'utils/constants'
import { Movies, TVSeries } from 'utils/types'
import { fetcher } from 'utils/helper'

export const getMoviesByGenre = async (genreId: number): Promise<Movies> =>
  fetcher(
    `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  )

export const getPopularMovies = async (): Promise<Movies> =>
  fetcher(
    `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )

export const getPopularTVSeries = async (): Promise<TVSeries> =>
  fetcher(`${BASE_URL}/tv/popular?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`)

export const getPopular = async <T>(url: string): Promise<T> => fetcher(url)
