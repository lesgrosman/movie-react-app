import { MovieListResponse } from './types'
import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { getPopularMovies } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'
import Typography from '@material-ui/core/Typography'

const PopularMovieGroup = () => {
  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getPopularMovies
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
        style={{ textAlign: 'center', marginBottom: '25px', marginTop: '40px' }}
      >
        Popular movies
      </Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default PopularMovieGroup
