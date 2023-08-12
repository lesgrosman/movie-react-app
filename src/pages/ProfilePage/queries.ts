import { Group } from './types'
import { QueryKeysProfile } from './constants'
import { RatedMovieItemResponse, RatedTVSeriesItemResponse } from '@utils/types'
import { getAccountDetail, getGenres, getGroupItems, getRatedItems } from './helpers'
import { useQuery } from '@tanstack/react-query'

export const getAccountDetailData = ({ session }: { session: string }) =>
  useQuery([QueryKeysProfile.ACCOUNT_DETAILS], () => getAccountDetail({ session }), {
    enabled: !!session,
  })

export const getMovieGenresData = () =>
  useQuery([QueryKeysProfile.MOVIE_GENRES], () => getGenres({ type: 'movie' }))

export const getTvGenresData = () =>
  useQuery([QueryKeysProfile.TV_GENRES], () => getGenres({ type: 'tv' }))

export const getRatedMoviesData = ({
  session,
  accountId,
}: {
  session: string
  accountId: string
}) =>
  useQuery(
    [QueryKeysProfile.RATED_MOVIES],
    () =>
      getRatedItems<{ results: RatedMovieItemResponse[] }>({ session, accountId, type: 'movies' }),
    { enabled: !!session }
  )

export const getRatedTvData = ({ session, accountId }: { session: string; accountId: string }) =>
  useQuery(
    [QueryKeysProfile.RATED_TV_SERIES],
    () =>
      getRatedItems<{ results: RatedTVSeriesItemResponse[] }>({ session, accountId, type: 'tv' }),
    { enabled: !!session }
  )

export const getGroupItemsData = <T>({
  session,
  accountId,
  group,
  type,
}: {
  session: string
  accountId: string
  group: Group
  type: 'movies' | 'tv'
}) =>
  useQuery([`${group}-${type}`], () => getGroupItems<T>({ session, accountId, group, type }), {
    enabled: !!session,
  })
