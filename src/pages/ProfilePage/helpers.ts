import { AccountDetail, Group } from './types'
import { BASE_URL } from '@utils/constants'
import { MovieOrTv, SimpleItem } from '@utils/types'
import { fetcher } from 'helpers/api.helpers'

export const getAccountDetail = async ({ session }: { session: string }) =>
  fetcher<AccountDetail>(`${BASE_URL}/account?session_id=${session}`)

export const getRatedItems = async <T>({
  session,
  accountId,
  type,
}: {
  session: string
  accountId: string
  type: 'movies' | 'tv'
}) =>
  fetcher<T>(
    `${BASE_URL}/account/${accountId}/rated/${type}?language=en-US&session_id=${session}&sort_by=created_at.desc`
  )

export const getGroupItems = async <T>({
  session,
  accountId,
  type,
  group,
}: {
  session: string
  accountId: string
  type: 'movies' | 'tv'
  group: Group
}) =>
  fetcher<T>(
    `${BASE_URL}/account/${accountId}/${group}/${type}?language=en-US&session_id=${session}&sort_by=created_at.desc`
  )

export const getGenres = async ({ type }: { type: MovieOrTv }) =>
  fetcher<{ genres: SimpleItem[] }>(`${BASE_URL}/genre/${type}/list?language=en-US`)
