import { BASE_URL } from 'utils/constants'
import { Credits, Keywords, Reviews, Trailers } from 'utils/types'
import { fetcher } from 'utils/helper'

export const fetchDetail = async <T>(type: 'movie' | 'tv', id = ''): Promise<T> =>
  fetcher(`${BASE_URL}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`)

export const fetchSimilar = async <T>(type: 'movie' | 'tv', id = ''): Promise<T> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US$page=1`
  )

export const fetchVideos = async (type: 'movie' | 'tv', id = ''): Promise<Trailers> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`
  )

export const fetchCredits = async (type: 'movie' | 'tv', id = ''): Promise<Credits> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`
  )

export const fetchReviews = async (type: 'movie' | 'tv', id = ''): Promise<Reviews> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )

export const fetchKeywords = async (type: 'movie' | 'tv', id = ''): Promise<Keywords> =>
  fetcher(`${BASE_URL}/${type}/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_DB_API}`)

export const fetchRecommendations = async <T>(type: 'movie' | 'tv', id = ''): Promise<T> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )

export const fetchAccountState = async <T>(
  type: 'movie' | 'tv',
  sessionId: string,
  id = ''
): Promise<T> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/account_states?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`
  )
