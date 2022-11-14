import { Genre, QueryType } from 'utils/types'
import { MovieListResponse } from './types'
import { getMoviesByGenre } from './queries'
import { useQuery } from '@tanstack/react-query'
import { useStyles } from './styles'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import MovieGroup from '../../components/MovieGroup'
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

  return (
    <Box pl='10px' pr='10px' className={classes.root}>
      <Typography variant='h4'>{t(genre.name)}</Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </Box>
  )
}

export default GenreMovieGroup
