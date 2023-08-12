import { MovieOrTv } from '@utils/types'
import { getAccountState, getKeywords, getRecommendations, getReviews } from './helpers'
import { useQuery } from '@tanstack/react-query'

interface Props {
  type: MovieOrTv
  id: string
}

export const getReviewsData = ({ type, id }: Props) =>
  useQuery([`reviews-${type}`, id], () => getReviews({ type, id }))

export const getKeywordsData = ({ type, id }: Props) =>
  useQuery([`keywords-${type}`, id], () => getKeywords({ type, id }))

export const getRecommendationsData = <T>({ type, id }: Props) =>
  useQuery([`recommendations-${type}`, id], () => getRecommendations<T>({ type, id }))

export const getAccountStateData = ({ type, id, session }: Props & { session: string }) =>
  useQuery([`${type}-account-state`, id], () => getAccountState({ type, id, session }), {
    enabled: !!session,
  })
