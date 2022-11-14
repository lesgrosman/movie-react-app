import { useStyles } from './styles'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

const MovieGroupSkeleton = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      {Array.from(Array(6).keys()).map(i => (
        <Grid item xs={6} md={2} key={i} className={classes.skeletonCard}>
          <Skeleton animation='wave' variant='rect' width={185} height={278} />
          <Skeleton animation='wave' variant='text' height={30} width={185} />
          <Skeleton animation='wave' variant='text' height={30} width={185} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieGroupSkeleton
