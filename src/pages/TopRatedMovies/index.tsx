import { Movies, QueryType } from 'utils/types'
import { QueryKeys } from 'utils/constants'
import { getTopRatedMovies } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'
import Seo from 'components/Seo'

const TopRatedRatedMovies = () => {
  const { data, isLoading, error }: QueryType<Movies> = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getTopRatedMovies
  )

  return (
    <>
      <Seo
        title='Top rated movies'
        description='Here are the top rated movies from website movie database'
        imageUrl=''
      />
      <div className='px-3 mt-10 text-center'>
        <h1 className='text-center'>Top rated movies</h1>
        <MovieGroup data={data?.results} loading={isLoading} error={error} />
      </div>
    </>
  )
}

export default TopRatedRatedMovies
