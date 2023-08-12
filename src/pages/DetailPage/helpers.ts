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
  fetcher<T>(`${BASE_URL}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`)

export const getSimilar = async <T>({ type, id }: Props) =>
  fetcher<T>(
    `${BASE_URL}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US$page=1`
  )

export const getVideos = async ({ type, id }: Props) =>
  fetcher<Trailers>(
    `${BASE_URL}/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`
  )

export const getCredits = async ({ type, id }: Props) =>
  fetcher<Credits>(
    `${BASE_URL}/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`
  )

export const getReviews = async ({ type, id }: Props) =>
  fetcher<Reviews>(
    `${BASE_URL}/${type}/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )

export const getKeywords = async ({ type, id }: Props) =>
  fetcher<Keywords>(`${BASE_URL}/${type}/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_DB_API}`)

export const getRecommendations = async <T>({ type, id }: Props) =>
  fetcher<T>(
    `${BASE_URL}/${type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`
  )

export const getAccountState = async ({ type, id, session }: Props & { session: string }) =>
  fetcher<AccountState>(
    `${BASE_URL}/${type}/${id}/account_states?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${session}`
  )

// mutations
export const addToWatchList = async ({
  session,
  accountId,
  body,
}: AddToWatchlistArgs): Promise<MutationResponse> =>
  fetcher(
    `${BASE_URL}/account/${accountId}/watchlist?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${session}`,
    {
      body: JSON.stringify(body),
      method: 'POST',
    }
  )

export const markAsFavorite = async ({
  session,
  accountId,
  body,
}: MarkAsFavoriteArgs): Promise<MutationResponse> =>
  fetcher(
    `${BASE_URL}/account/${accountId}/favorite?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${session}`,
    {
      body: JSON.stringify(body),
      method: 'POST',
    }
  )

export const addRating = async ({
  session,
  mediaId,
  mediaType,
  body,
}: AddRatingArgs): Promise<MutationResponse> =>
  fetcher(
    `${BASE_URL}/${mediaType}/${mediaId}/rating?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${session}`,
    { body: JSON.stringify(body), method: 'POST' }
  )

export const removeRating = async ({
  id,
  type,
  session,
}: {
  id: string
  type: string
  session: string
}): Promise<MutationResponse> =>
  fetcher(
    `${BASE_URL}/${type}/${id}/rating?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${session}`,
    {
      method: 'DELETE',
    }
  )
