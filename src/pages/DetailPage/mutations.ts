import { AddToWatchlistDto, MarkAsFavoriteDto } from './types'
import { BASE_URL } from 'utils/constants'
import { sender } from 'utils/helper'

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