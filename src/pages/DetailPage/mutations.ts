import { AddToWatchlistDto, MarkAsFavoriteDto } from './types'
import { MovieOrTv } from '@utils/types'
import { addRating, addToWatchList, markAsFavorite, removeRating } from './helpers'
import { useMutation } from '@tanstack/react-query'

export const useAddToWatchlist = (dto: AddToWatchlistDto) =>
  useMutation([`${dto.media_type}-account-state`, dto.media_id], addToWatchList)

export const useMarkAsFavorite = (dto: MarkAsFavoriteDto) =>
  useMutation([`${dto.media_type}-account-state`, dto.media_id], markAsFavorite)

export const useAddRating = ({ type, id }: { type: MovieOrTv; id: string }) =>
  useMutation([`${type}-account-state`, id], addRating)

export const useRemoveRating = ({ type, id }: { type: MovieOrTv; id: string }) =>
  useMutation([`${type}-account-state`, id], removeRating)
