import { makeStyles } from '@material-ui/core'
import { useDetailContent } from './useDetailContent'
import AboutTable from '../../components/DetailMovieLayout/AboutTable'
import Carousel from '../../components/Carousel/Carousel'
import DetailMovieLayout from '../../components/DetailMovieLayout'
import Error from '../../components/UI/Error/Error'
import MovieDetailSkeleton from '../../components/DetailMovieLayout/MovieDetailSkeleton'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: '10px',
    width: '185px',
    height: '278px',
  },
  bottomTitle: {
    marginBottom: '15px',
    fontWeight: 500,
  },
  rankStars: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  rankTop: {
    display: 'inline-block',
    color: rankAverage => (rankAverage >= 7 ? '#00e676' : rankAverage < 5 ? '#c50e29' : '#b0bec5'),
    fontWeight: 500,
    marginRight: '10px',
  },
  cast: {
    marginTop: '30px',
  },
  rank: {
    marginLeft: '20px',
  },
  rankSecondary: {
    display: 'inline-block',
    color: 'rgba(255,255,255, .5)',
    align: 'bottom',
  },
}))

interface Props {
  type: string
}

const DetailPage = ({ type }: Props) => {
  const { movieObj, error, loading } = useDetailContent({
    type,
  })

  const classes = useStyles(movieObj?.rankAverage)

  if (loading) return <MovieDetailSkeleton />

  if (error || !movieObj) return <Error error={error} />

  const { poster, title, rankCount, rankAverage, cast, overview, similar, trailerURL } = movieObj

  const imageNode = <img className={classes.image} src={poster} alt='img' />

  const centralNode = (
    <>
      <Typography variant='h4'>{title}</Typography>
      <AboutTable data={movieObj} />
    </>
  )

  const rightNode = (
    <>
      <Typography className={classes.rankTop} variant='h4'>
        {rankAverage}
      </Typography>
      <Typography
        style={{
          display: 'inline-block',
          color: 'rgba(255,255,255, .5)',
        }}
        variant='h5'
      >
        {rankCount}
      </Typography>
      <Typography className={classes.cast} variant='h6'>
        Cast:
      </Typography>
      {cast.map(person => (
        <Typography key={person.id} gutterBottom>
          {person.name}
        </Typography>
      ))}
    </>
  )

  const similarNode = (
    <>
      <Typography className={classes.bottomTitle} variant='h5'>
        Similar movies
      </Typography>
      <Carousel list={similar} similar />
    </>
  )

  const annotationNode = (
    <>
      <Typography className={classes.bottomTitle} variant='h5'>
        Annotation
      </Typography>
      <Typography variant='body1'>{overview}</Typography>
    </>
  )

  const ratingNode = (
    <>
      <Typography className={classes.bottomTitle} variant='h5'>
        Film Rating
      </Typography>
      <div className={classes.rankStars}>
        <StarRatings
          rating={rankAverage}
          starRatedColor='#ffb300'
          numberOfStars={10}
          name='rating'
          starDimension='40px'
          starSpacing='5px'
        />
        <Typography className={classes.rank} variant='h3'>
          {rankAverage}
        </Typography>
        <Typography className={classes.rankSecondary} variant='h5'>
          {rankCount}
        </Typography>
      </div>
    </>
  )

  const trailerNode = (
    <>
      {trailerURL ? (
        <ReactPlayer
          url={trailerURL}
          controls={true}
          height='450px'
          width='740px'
          origin={window.location.origin}
        />
      ) : (
        <Typography variant='h5'>{'Trailer does not exist :('}</Typography>
      )}
    </>
  )

  return (
    <DetailMovieLayout
      imageNode={imageNode}
      centralNode={centralNode}
      rightNode={rightNode}
      similarNode={similarNode}
      annotationNode={annotationNode}
      ratingNode={ratingNode}
      trailerNode={trailerNode}
    />
  )
}

export default DetailPage
