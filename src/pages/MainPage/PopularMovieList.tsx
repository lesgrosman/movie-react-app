import { MovieListResponse } from './types'
import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { getPopularMovies } from './queries'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import MovieGroup from 'components/MovieGroup'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTypography-root': {
      textAlign: 'center',
      marginBottom: theme.typography.pxToRem(25),
    },
    '& .MuiTypography-root:first-child': {
      marginTop: theme.typography.pxToRem(25),
    },
  },
}))

const PopularMovieGroup = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { data, isLoading, error }: QueryType<MovieListResponse> = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getPopularMovies
  )

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{t('common.groups.popularMovies')}</Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </Box>
  )
}

export default PopularMovieGroup
