import { AccountDetail } from '../types'
import { QueryKeysProfile } from '../constants'
import { QueryType, RatedMovieItemResponse, RatedTVSeriesItemResponse } from '@utils/types'
import { getAccountDetail, getRatedItems } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import View from './View'

const Hero = () => {
  const { session, accountId } = useAuthContext()

  const { data }: QueryType<AccountDetail> = useQuery(
    [QueryKeysProfile.ACCOUNT_DETAILS],
    () => getAccountDetail(session),
    {
      enabled: !!session,
    }
  )

  const { data: ratedMovies }: QueryType<{ results: RatedMovieItemResponse[] }> = useQuery(
    [QueryKeysProfile.RATED_MOVIES],
    () => getRatedItems(session, accountId, 'movies'),
    {
      enabled: !!session,
    }
  )

  const { data: ratedTV }: QueryType<{ results: RatedTVSeriesItemResponse[] }> = useQuery(
    [QueryKeysProfile.RATED_TV_SERIES],
    () => getRatedItems(session, accountId, 'tv'),
    {
      enabled: !!session,
    }
  )

  if (!data || !ratedMovies || !ratedTV) return null

  return <View account={data} movies={ratedMovies} tv={ratedTV} />
}

export default Hero
