import { MovieOrTv } from '@utils/types'

export type AddToWatchlistDto = {
  media_id: number
  media_type: 'tv' | 'movie'
  watchlist: boolean
}

export type MarkAsFavoriteDto = {
  media_id: number
  media_type: 'tv' | 'movie'
  favorite: boolean
}

export type AddRatingDto = {
  value: number
}

export type AddToWatchlistArgs = {
  accountId: string
  session: string
  body: AddToWatchlistDto
}

export type MarkAsFavoriteArgs = {
  accountId: string
  session: string
  body: MarkAsFavoriteDto
}

export type AddRatingArgs = {
  session: string
  mediaType: MovieOrTv
  mediaId: string
  body: AddRatingDto
}
