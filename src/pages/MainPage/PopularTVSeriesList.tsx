import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { TVSeriesListResponse } from './types'
import { getPopularTVSeries } from './queries'
import { useQuery } from '@tanstack/react-query'
import { useStyles } from './styles'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import MovieGroup from 'components/MovieGroup'
import Typography from '@material-ui/core/Typography'

const PopularTVSeriesGroup = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { data, error, isLoading }: QueryType<TVSeriesListResponse> = useQuery(
    [`${QueryKeys.POPULAR_TV_MAIN_GROUP}`],
    getPopularTVSeries
  )

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{t('common.groups.popularTV')}</Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} type='tv' />
    </Box>
  )
}

export default PopularTVSeriesGroup
