import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { TVSeriesListResponse } from './types'
import { getPopularTVSeries } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'
import Typography from '@material-ui/core/Typography'

const PopularTVSeriesGroup = () => {
  const { data, error, isLoading }: QueryType<TVSeriesListResponse> = useQuery(
    [`${QueryKeys.POPULAR_TV_MAIN_GROUP}`],
    getPopularTVSeries
  )

  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: '25px', marginTop: '25px' }}
      >
        Popular TV Series
      </Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} type='tv' />
    </div>
  )
}

export default PopularTVSeriesGroup
