import { Movies, QueryType, TVSeries } from 'utils/types'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'

interface Props {
  title: string
  queryKey: string
  fetchFn: () => void
}

const MovieList = ({ title, queryKey, fetchFn }: Props) => {
  const { data, isLoading, error }: QueryType<Movies | TVSeries> = useQuery([queryKey], fetchFn)
  return (
    <div className='px-3 mt-10 text-center'>
      <h1 className='text-center'>{title}</h1>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default MovieList
