import { BASE_URL } from 'utils/constants'
import { Credits, Trailers } from 'utils/types'
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
