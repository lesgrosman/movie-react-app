import { Movies, QueryType, TVSeries } from 'utils/types'
import { getPopular } from '../queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from 'components/MovieGroup'

interface Props {
  url: string
  queryKey: string
}

const MovieList = ({ url, queryKey }: Props) => {
  const { data, isLoading, error }: QueryType<Movies | TVSeries> = useQuery([queryKey], () =>
    getPopular(url)
  )
  return (
    <div className='px-3 mt-10 text-center'>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default MovieList
