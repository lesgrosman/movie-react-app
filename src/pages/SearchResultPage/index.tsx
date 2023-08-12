import { getSearchMoviesData, getSearchTvData } from './queries'
import { useRouter } from 'next/router'
import Container from '@components/Container'
import Layout from './Layout'

const SearchResultPage = () => {
  const router = useRouter()

  const { result } = router.query

  const { data: moviesData, isLoading } = getSearchMoviesData(result as string)

  const { data: tvData, isLoading: looadingTv } = getSearchTvData(result as string)

  if (isLoading || looadingTv || !tvData || !moviesData) return <>Loading...</>

  return (
    <Container>
      <div className='px-3 mt-32'>
        <Layout moviesData={moviesData} tvData={tvData} />
      </div>
    </Container>
  )
}
export default SearchResultPage
