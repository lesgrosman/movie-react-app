import { AddToWatchlistDto, MarkAsFavoriteDto, RateDto } from './types'
import { BASE_URL } from 'utils/constants'
import { MovieOrTv } from '@utils/types'
import { remover, sender } from 'utils/helper'

export const addToWatchList = async (
  accountId: string,
  sessionId: string,
  dto: AddToWatchlistDto
) =>
  sender<AddToWatchlistDto>(
    `${BASE_URL}/account/${accountId}/watchlist?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`,
    dto
  )

export const markAsFavorite = async (
  accountId: string,
  sessionId: string,
  dto: MarkAsFavoriteDto
) =>
  sender<MarkAsFavoriteDto>(
    `${BASE_URL}/account/${accountId}/favorite?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`,
    dto
  )

export const rate = async (
  sessionId: string,
  mediaType: MovieOrTv,
  mediaId: string,
  rating: number
) =>
  sender<RateDto>(
    `${BASE_URL}/${mediaType}/${mediaId}/rating?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`,
    { value: rating }
  )

export const removeRating = async (sessionId: string, mediaType: MovieOrTv, mediaId: string) =>
  remover(
    `${BASE_URL}/${mediaType}/${mediaId}/rating?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`
  )
