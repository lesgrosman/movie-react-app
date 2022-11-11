import { getPopularMovies } from './queries'
import { makeStyles } from '@material-ui/core/styles'
import { transformToPreviewItems } from '../../utils/helper'
import { useQuery } from '@tanstack/react-query'
import Box from '@material-ui/core/Box'
import Carousel from 'components/Carousel/Carousel'
import Error from '../../components/UI/Error/Error'
import MovieGroupSkeleton from './MovieGroupSkeleton'

import { QueryKeys } from 'utils/constants'
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

  const { data, error, isLoading } = useQuery(
    [`${QueryKeys.POPULAR_MOVIES_MAIN_GROUP}`],
    getPopularMovies
  )

  if (isLoading && !data) return <MovieGroupSkeleton />

  if (error || !data) return <Error error={error} />

  if (data?.results.length < 1) {
    return <h3>It seems like there are no movies you are looking for...</h3>
  }

  const tranformedMovies = transformToPreviewItems(data.results)

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>Popular movies</Typography>
      <Carousel list={tranformedMovies} />
    </Box>
  )
}

export default PopularMovieGroup
