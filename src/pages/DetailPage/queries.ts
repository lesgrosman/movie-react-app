import { BASE_URL } from 'utils/constants'
import { Credits, Keywords, Reviews, Trailers } from 'utils/types'
import { fetcher } from 'utils/helper'

export const fetchDetail = async <T>(id = '', type: 'movie' | 'tv'): Promise<T> =>
  fetcher(`${BASE_URL}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`)

export const fetchSimilar = async <T>(id = '', type: 'movie' | 'tv'): Promise<T> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US$page=1`
  )

export const fetchVideos = async (id = '', type: 'movie' | 'tv'): Promise<Trailers> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`
  )

export const fetchCredits = async (id = '', type: 'movie' | 'tv'): Promise<Credits> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`
  )

export const fetchReviews = async (id = '', type: 'movie' | 'tv'): Promise<Reviews> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )

export const fetchKeywords = async (id = '', type: 'movie' | 'tv'): Promise<Keywords> =>
  fetcher(`${BASE_URL}/${type}/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_DB_API}`)

export const fetchRecommendations = async <T>(id = '', type: 'movie' | 'tv'): Promise<T> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )
