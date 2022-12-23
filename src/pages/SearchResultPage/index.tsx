import { Movies, QueryType } from 'utils/types'
import { QueryKeys } from 'utils/constants'
import { searchMovies } from './queries'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Container from '@components/Container'
import MovieGroup from 'components/MovieGroup'

const SearchResultPage = () => {
  const router = useRouter()

  const { result } = router.query

  const { data, isLoading, error }: QueryType<Movies> = useQuery(
    [`${QueryKeys.SEARCH_MOVIES}`, result as string],
    () => searchMovies(result as string)
  )

  return (
    <Container>
      <div className='px-3 mt-32'>
        <h1 className='text-center mb-10'>Search results</h1>
        <MovieGroup data={data?.results} loading={isLoading} error={error} />
      </div>
    </Container>
  )
}
export default SearchResultPage
