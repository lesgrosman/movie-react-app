import { getAccountDetailData, getRatedMoviesData, getRatedTvData } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import View from './View'

const Hero = () => {
  const { session, accountId } = useAuthContext()

  const { data } = getAccountDetailData({ session })

  const { data: ratedMovies } = getRatedMoviesData({ session, accountId })

  const { data: ratedTV } = getRatedTvData({ session, accountId })

  if (!data || !ratedMovies || !ratedTV) return null

  return <View account={data} movies={ratedMovies} tv={ratedTV} />
}

export default Hero
