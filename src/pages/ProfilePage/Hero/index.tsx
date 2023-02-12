import { AccountDetail } from '../types'
import { Movies, QueryType, TVSeries } from '@utils/types'
import { QueryKeysProfile } from '../constants'
import { getAccountDetail, getRatedItems } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import View from './View'

const Hero = () => {
  const { session, accountId } = useAuthContext()

  const { data }: QueryType<AccountDetail> = useQuery([QueryKeysProfile.ACCOUNT_DETAILS], () =>
    getAccountDetail(session)
  )

  const { data: ratedMovies }: QueryType<Movies> = useQuery([QueryKeysProfile.RATED_MOVIES], () =>
    getRatedItems(session, accountId, 'movies')
  )

  const { data: ratedTV }: QueryType<TVSeries> = useQuery([QueryKeysProfile.RATED_TV_SERIES], () =>
    getRatedItems(session, accountId, 'tv')
  )

  if (!data || !ratedMovies || !ratedTV) return null

  return <View account={data} movies={ratedMovies} tv={ratedTV} />
}

export default Hero
