import { useStyles } from '../styles'
import StarRatings from 'react-star-ratings'
import Typography from '@material-ui/core/Typography'

type Props = {
  title: string
  rankAverage?: number
  rankCount?: number
}

const Rating = ({ title, rankAverage, rankCount }: Props) => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.bottomTitle} variant='h5'>
        {title}
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
}

export default Rating
