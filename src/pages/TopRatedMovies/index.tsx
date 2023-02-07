import { Movies, QueryType } from 'utils/types'
import { QueryKeys } from 'utils/constants'
import { getTopRatedMovies } from './queries'
import { useQuery } from '@tanstack/react-query'
import Container from 'components/Container'
import MovieGroup from 'components/MovieGroup'
import Seo from 'components/Seo'

const TopRatedRatedMovies = () => {
  const { data, isLoading, error }: QueryType<Movies> = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getTopRatedMovies
  )

  return (
    <Container>
      <Seo
        title='Top rated movies'
        description='Here are the top rated movies from website movie database'
        imageUrl=''
      />
      <div className='px-3 text-center mt-32'>
        <h1 className='text-center'>Top rated movies</h1>
        <MovieGroup data={data?.results} loading={isLoading} error={error} />
      </div>
    </Container>
  )
}

export default TopRatedRatedMovies
