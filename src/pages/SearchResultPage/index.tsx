import { getSearchResultsData } from './queries'
import { useRouter } from 'next/router'
import Container from '@components/Container'
import Layout from './Layout'

const SearchResultPage = () => {
  const router = useRouter()

  const { result } = router.query

  const { data: movieResutls, isLoading: movieResultsIsLoading } = getSearchResultsData({
    param: result as string,
    type: 'movie',
  })

  const { data: tvResults, isLoading: tvResultsIsLoading } = getSearchResultsData({
    param: result as string,
    type: 'tv',
  })

  const { data: personResults, isLoading: personResultsIsLoading } = getSearchResultsData({
    param: result as string,
    type: 'person',
  })

  if (
    movieResultsIsLoading ||
    tvResultsIsLoading ||
    personResultsIsLoading ||
    !movieResutls ||
    !tvResults ||
    !personResults
  )
    return <>Loading...</>

  return (
    <Container>
      <div className='px-3 mt-32'>
        <Layout
          movieResults={movieResutls}
          tvResutls={tvResults}
          personResults={personResults}
          param={result as string}
        />
      </div>
    </Container>
  )
}
export default SearchResultPage
