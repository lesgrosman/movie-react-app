import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { TVSeriesListResponse } from './types'
import { getPopularTVSeries } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'

const PopularTVSeriesGroup = () => {
  const { data, error, isLoading }: QueryType<TVSeriesListResponse> = useQuery(
    [`${QueryKeys.POPULAR_TV_MAIN_GROUP}`],
    getPopularTVSeries
  )

  return (
    <div className='px-3 text-center'>
      <h1>Popular TV Series</h1>
      <MovieGroup data={data?.results} loading={isLoading} error={error} type='tv' />
    </div>
  )
}

export default PopularTVSeriesGroup
