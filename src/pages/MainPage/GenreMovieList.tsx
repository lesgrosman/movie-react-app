import { Genre, QueryType } from 'utils/types'
import { MovieListResponse } from './types'
import { getMoviesByGenre } from './queries'
import { useQuery } from '@tanstack/react-query'
import MovieGroup from '../../components/MovieGroup'
import Typography from '@material-ui/core/Typography'

interface Props {
  genre: Genre
}

const GenreMovieGroup = ({ genre }: Props) => {
  const { data, error, isLoading }: QueryType<MovieListResponse> = useQuery(
    [`${genre.name}-main-group`],
    () => getMoviesByGenre(genre.id)
  )

  return (
    <div
      style={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Typography
        variant='h4'
        style={{ textAlign: 'center', marginBottom: '25px', marginTop: '25px' }}
      >
        {genre.name}
      </Typography>
      <MovieGroup data={data?.results} loading={isLoading} error={error} />
    </div>
  )
}

export default GenreMovieGroup
