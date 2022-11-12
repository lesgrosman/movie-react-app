import { QueryKeys } from 'utils/constants'
import { QueryType } from 'utils/types'
import { TVSeriesListResponse } from './types'
import { getPopularTVSeries } from './queries'
import { transformToPreviewItems } from '../../utils/helper'
import { useQuery } from '@tanstack/react-query'
import { useStyles } from './styles'
import Box from '@material-ui/core/Box'
import Carousel from 'components/Carousel/Carousel'
import Error from '../../components/UI/Error/Error'
import MovieGroupSkeleton from './MovieGroupSkeleton'
import Typography from '@material-ui/core/Typography'

const PopularTVSeriesGroup = () => {
  const classes = useStyles()

  const { data, error, isLoading }: QueryType<TVSeriesListResponse> = useQuery(
    [`${QueryKeys.POPULAR_TV_MAIN_GROUP}`],
    getPopularTVSeries
  )

  if (isLoading && !data) return <MovieGroupSkeleton />

  if (error || !data) return <Error error={error?.response?.status} />

  if (data?.results.length < 1) {
    return <h3>It seems like there are no movies you are looking for...</h3>
  }

  const tranformedMovies = transformToPreviewItems(data.results)

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>Popular TV Series</Typography>
      <Carousel list={tranformedMovies} type='tv' />
    </Box>
  )
}

export default PopularTVSeriesGroup
