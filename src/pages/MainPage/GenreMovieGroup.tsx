import { Genre } from 'utils/types'
import { getMoviesByGenre } from './queries'
import { transformToPreviewItems } from '../../utils/helper'
import { useQuery } from '@tanstack/react-query'
import { useStyles } from './styles'
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

  const { data, error, isLoading } = useQuery([`${genre.name}-main-group`], () =>
    getMoviesByGenre(genre.id)
  )

  if (isLoading && !data) return <MovieGroupSkeleton />

  if (error || !data) return <Error error={error} />

  if (data?.results.length < 1) {
    return <h3>It seems like there are no movies you are looking for...</h3>
  }

  const tranformedMovies = transformToPreviewItems(data.results)

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{genre.name}</Typography>
      <Carousel list={tranformedMovies} />
    </Box>
  )
}

export default GenreMovieGroup
