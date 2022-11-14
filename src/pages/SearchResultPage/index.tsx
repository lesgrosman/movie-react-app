import { MovieListResponse } from 'pages/MainPage/types'
import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { searchMovies } from './queries'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useStyles } from '../MainPage/styles'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import MovieGroup from 'components/MovieGroup'
import Typography from '@material-ui/core/Typography'

const SearchResultPage = () => {
  const classes = useStyles()
  const { query } = useParams()
  const { t } = useTranslation()

  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.SEARCH_MOVIES}`, query],
    () => searchMovies(query)
  )

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{t('search.title')}</Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </Box>
  )
}
export default SearchResultPage
