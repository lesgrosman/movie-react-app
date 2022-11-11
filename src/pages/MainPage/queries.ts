import { BASE_URL } from 'utils/constants'
import { MovieListResponse } from './types'
import { fetcher } from 'utils/helper'

export const getMoviesByGenre = async (genreId: number): Promise<MovieListResponse> =>
  fetcher<MovieListResponse>(
    `${BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_DB_API}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  )

export const getPopularMovies = async (): Promise<MovieListResponse> =>
  fetcher<MovieListResponse>(
    `${BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_DB_API}&language=en-US&page=1`
  )

export const getPopularTVSeries = async (): Promise<MovieListResponse> =>
  fetcher<MovieListResponse>(
    `${BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_DB_API}&language=en-US&page=1`
  )
