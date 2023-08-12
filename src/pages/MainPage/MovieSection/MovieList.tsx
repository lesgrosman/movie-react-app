import { getMovieListData } from '../queries'
import MovieGroup from 'components/MovieGroup'

interface Props {
  url: string
  queryKey: string
}

const MovieList = ({ url, queryKey }: Props) => {
  const { data, isLoading, error } = getMovieListData({ url, key: queryKey })

  return (
    <div className='px-3 mt-10 text-center'>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default MovieList
