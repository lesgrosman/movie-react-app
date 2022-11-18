import { MovieListResponse } from '../../src/pages/MainPage/types'
import { QueryKeys } from '../../src/utils/constants'
import { QueryType } from '../../src/utils/types'
import { searchMovies } from '../../src/pages/SearchResultPage/queries'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useStyles } from '../../src/pages/MainPage/styles'
import Box from '@material-ui/core/Box'
import MovieGroup from '../../src/components/MovieGroup'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const SearchResultPage = () => {
  const classes = useStyles()
  const router = useRouter()

  const { result } = router.query

  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.SEARCH_MOVIES}`, result as string],
    () => searchMovies(result as string)
  )

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>Search results</Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </Box>
  )
}
export default SearchResultPage
