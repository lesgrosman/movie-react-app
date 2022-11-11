import { useStyles } from './styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

const MovieGroupSkeleton = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <Skeleton animation='wave' variant='text' height={70} width='25%' />
      </Box>
      <Grid container spacing={2}>
        {Array.from(Array(6).keys()).map(i => (
          <Grid item xs={6} md={2} key={i} className={classes.skeletonCard}>
            <Skeleton animation='wave' variant='rect' width={185} height={278} />
            <Skeleton animation='wave' variant='text' height={30} width={185} />
            <Skeleton animation='wave' variant='text' height={30} width={185} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default MovieGroupSkeleton