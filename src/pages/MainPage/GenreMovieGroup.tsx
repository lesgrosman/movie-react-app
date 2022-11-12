import { Genre, QueryType } from 'utils/types'
import { MovieListResponse } from './types'
import { getMoviesByGenre } from './queries'
import { transformToPreviewItems } from '../../utils/helper'
import { useQuery } from '@tanstack/react-query'
import { useStyles } from './styles'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import Carousel from 'components/Carousel/Carousel'
import Error from '../../components/UI/Error/Error'
import MovieGroupSkeleton from './MovieGroupSkeleton'
import Typography from '@material-ui/core/Typography'

interface Props {
  genre: Genre
}

const GenreMovieGroup = ({ genre }: Props) => {
  const classes = useStyles()
  const { t } = useTranslation()

  const { data, error, isLoading }: QueryType<MovieListResponse> = useQuery(
    [`${genre.name}-main-group`],
    () => getMoviesByGenre(genre.id)
  )

  if (isLoading && !data) return <MovieGroupSkeleton />

  if (error || !data) return <Error error={error?.response?.status} />

  if (data?.results.length < 1) {
    return <h3>It seems like there are no movies you are looking for...</h3>
  }

  const tranformedMovies = transformToPreviewItems(data.results)

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{t(genre.name)}</Typography>
      <Carousel list={tranformedMovies} />
    </Box>
  )
}

export default GenreMovieGroup
