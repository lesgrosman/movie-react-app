import { MovieListResponse } from 'pages/MainPage/types'
import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { searchMovies } from './queries'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import MovieGroup from 'components/MovieGroup'

const SearchResultPage = () => {
  const router = useRouter()

  const { result } = router.query

  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.SEARCH_MOVIES}`, result as string],
    () => searchMovies(result as string)
  )

  return (
    <div className='px-3'>
      <h1 className='text-center mb-10'>Search results</h1>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}
export default SearchResultPage
