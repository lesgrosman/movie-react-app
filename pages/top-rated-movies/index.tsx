import { MovieListResponse } from '../../src/pages/TopRatedMovies/types'
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { QueryKeys } from '../../src/utils/constants'
import { QueryType } from '../../src/utils/types'
import { getTopRatedMovies } from '../../src/pages/TopRatedMovies/queries'
import MovieGroup from '../../src/components/MovieGroup'
import React from 'react'
import Seo from '../../src/components/Seo'

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`], getTopRatedMovies)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const TopRatedRatedMovies = () => {
  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getTopRatedMovies
  )

  return (
    <>
      <Seo
        title='Top rated movies'
        description='Here are the top rated movies from website movie database'
        imageUrl=''
      />
      <div className='px-3 mt-10 text-center'>
        <h1 className='text-center'>Top rated movies</h1>
        <MovieGroup data={data?.results} loading={isLoading} error={error} />
      </div>
    </>
  )
}

export default TopRatedRatedMovies
