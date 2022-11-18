import { Genre, QueryType } from 'utils/types'
import { MovieListResponse } from './types'
import { getMoviesByGenre } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from '../../components/MovieGroup'

interface Props {
  genre: Genre
}

const GenreMovieGroup = ({ genre }: Props) => {
  const { data, error, isLoading }: QueryType<MovieListResponse> = useQuery(
    [`${genre.name}-main-group`],
    () => getMoviesByGenre(genre.id)
  )

  return (
    <div className='px-3 mt-10 text-center'>
      <h1>{genre.name}</h1>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default GenreMovieGroup
