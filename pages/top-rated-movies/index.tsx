import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '../../src/utils/constants'
import { getTopRatedMovies } from '../../src/pages/TopRatedMovies/queries'

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`], getTopRatedMovies)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export { default } from '../../src/pages/TopRatedMovies'
