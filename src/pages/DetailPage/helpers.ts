import { AccountState, Credits, Keywords, MovieOrTv, Reviews, Trailers } from '@utils/types'
import { BASE_URL } from '@utils/constants'
import { fetcher } from 'helpers/api.helpers'

interface Props {
  type: MovieOrTv
  id: string
}

export const getDetail = async <T>({ type, id }: Props) =>
  fetcher<T>({
    url: `${BASE_URL}/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`,
  })

export const getSimilar = async <T>({ type, id }: Props) =>
  fetcher<T>({
    url: `${BASE_URL}/${type}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US$page=1`,
  })

export const getVideos = async ({ type, id }: Props) =>
  fetcher<Trailers>({
    url: `${BASE_URL}/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`,
  })

export const getCredits = async ({ type, id }: Props) =>
  fetcher<Credits>({
    url: `${BASE_URL}/${type}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US`,
  })

export const getReviews = async ({ type, id }: Props) =>
  fetcher<Reviews>({
    url: `${BASE_URL}/${type}/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`,
  })

export const getKeywords = async ({ type, id }: Props) =>
  fetcher<Keywords>({
    url: `${BASE_URL}/${type}/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
  })

export const getRecommendations = async <T>({ type, id }: Props) =>
  fetcher<T>({
    url: `${BASE_URL}/${type}/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`,
  })

export const getAccountState = async ({ type, id, session }: Props & { session: string }) =>
  fetcher<AccountState>({
    url: `${BASE_URL}/${type}/${id}/account_states?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${session}`,
  })
