import { getSearchResultsData } from './queries'
import { useRouter } from 'next/router'
import Layout from './Layout'
import LoadingPlaceholder from './LoadingPlaceholder'

const SearchResults = () => {
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
    return <LoadingPlaceholder />

  return (
    <Layout
      movieResults={movieResutls}
      tvResutls={tvResults}
      personResults={personResults}
      param={result as string}
    />
  )
}
export default SearchResults
