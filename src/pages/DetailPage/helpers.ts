import {
  AccountState,
  Credits,
  Keywords,
  MovieOrTv,
  MutationResponse,
  Reviews,
  Trailers,
} from '@utils/types'
import { AddRatingArgs, AddToWatchlistArgs, MarkAsFavoriteArgs } from './types'
import { BASE_URL } from '@utils/constants'
import { fetcher } from 'helpers/api.helpers'

interface Props {
  type: MovieOrTv
  id: string
}
// queries
export const getDetail = async <T>({ type, id }: Props) =>
  fetcher<T>(`${BASE_URL}/${type}/${id}?language=en-US`)

export const getSimilar = async <T>({ type, id }: Props) =>
  fetcher<T>(`${BASE_URL}/${type}/${id}/similar?language=en-US$page=1`)

export const getVideos = async ({ type, id }: Props) =>
  fetcher<Trailers>(`${BASE_URL}/${type}/${id}/videos?language=en-US`)

export const getCredits = async ({ type, id }: Props) =>
  fetcher<Credits>(`${BASE_URL}/${type}/${id}/credits?language=en-US`)

export const getReviews = async ({ type, id }: Props) =>
  fetcher<Reviews>(`${BASE_URL}/${type}/${id}/reviews?language=en-US&page=1`)

export const getKeywords = async ({ type, id }: Props) =>
  fetcher<Keywords>(`${BASE_URL}/${type}/${id}/keywords`)

export const getRecommendations = async <T>({ type, id }: Props) =>
  fetcher<T>(`${BASE_URL}/${type}/${id}/recommendations?language=en-US&page=1`)

export const getAccountState = async ({ type, id, session }: Props & { session: string }) =>
  fetcher<AccountState>(`${BASE_URL}/${type}/${id}/account_states?session_id=${session}`)

// mutations
export const addToWatchList = async ({
  session,
  accountId,
  body,
}: AddToWatchlistArgs): Promise<MutationResponse> =>
  fetcher(`${BASE_URL}/account/${accountId}/watchlist?session_id=${session}`, {
    body: JSON.stringify(body),
    method: 'POST',
  })

export const markAsFavorite = async ({
  session,
  accountId,
  body,
}: MarkAsFavoriteArgs): Promise<MutationResponse> =>
  fetcher(`${BASE_URL}/account/${accountId}/favorite?session_id=${session}`, {
    body: JSON.stringify(body),
    method: 'POST',
  })

export const addRating = async ({
  session,
  mediaId,
  mediaType,
  body,
}: AddRatingArgs): Promise<MutationResponse> =>
  fetcher(`${BASE_URL}/${mediaType}/${mediaId}/rating?session_id=${session}`, {
    body: JSON.stringify(body),
    method: 'POST',
  })

export const removeRating = async ({
  id,
  type,
  session,
}: {
  id: string
  type: string
  session: string
}): Promise<MutationResponse> =>
  fetcher(`${BASE_URL}/${type}/${id}/rating?session_id=${session}`, {
    method: 'DELETE',
  })
