import { MovieListResponse } from './types'
import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { getPopularMovies } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'

const PopularMovieGroup = () => {
  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getPopularMovies
  )
  return (
    <div className='px-3 mt-10 text-center'>
      <h1 className='text-center'>Popular movies</h1>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default PopularMovieGroup
