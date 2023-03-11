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
