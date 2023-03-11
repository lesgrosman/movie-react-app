import { BASE_URL } from '../../utils/constants'
import { Movies, SimpleItem, TVSeries } from '@utils/types'
import { fetcher } from '../../utils/helper'

export const getAccountDetail = async <Account>(sessionId: string): Promise<Account> =>
  fetcher(`${BASE_URL}/account?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`)

export const getRatedItems = async <T>(
  sessionId: string,
  accountId: string,
  type: 'movies' | 'tv'
): Promise<T> =>
  fetcher(
    `${BASE_URL}/account/${accountId}/rated/${type}?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc`
  )

export const getListItems = async (
  sessionId: string,
  accountId: string,
  group: 'favorite' | 'rated' | 'watchlist',
  type: 'movies' | 'tv'
): Promise<Movies | TVSeries> =>
  fetcher(
    `${BASE_URL}/account/${accountId}/${group}/${type}?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&session_id=${sessionId}&sort_by=created_at.desc`
  )

export const getGenres = async (type: 'movie' | 'tv'): Promise<SimpleItem> =>
  fetcher(`${BASE_URL}/genre/${type}/list?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`)
