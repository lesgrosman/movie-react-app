import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings'

const useStyles = makeStyles({
  rootBottom:{
    display: 'flex',
    paddingTop: '30px',
    paddingLeft: '25px'
  },
  leftBottomSide: {
    display: 'flex',
    flexDirection: 'column'
  },
  bottomBlock: {
    marginBottom: '20px'
  },
  bottomTitle: {
    marginBottom: '15px',
    fontWeight: 500
  },
  rankStars: {
    display: 'flex',
    alignItems: 'flex-end'
  }
})

const MovieBottomContent = ({ movie }) => {
  const classes = useStyles()
  const { overview, rank_average, rank_count, trailerURL } = movie

  return (
    <Grid className={classes.rootBottom} item container>
      <Grid className={classes.leftBottomSide} item container md={8}>
        <Grid className={classes.bottomBlock} item>
          <Typography className={classes.bottomTitle} variant="h5">Annotation</Typography>
          <Typography variant="body1">{overview}</Typography>
        </Grid>
        <Grid className={classes.bottomBlock} item>
          <Typography className={classes.bottomTitle} variant="h5">Film Rating</Typography>
          <div className={classes.rankStars}>
            <StarRatings
              rating={rank_average}
              starRatedColor="#ffb300"
              numberOfStars={10}
              name="rating"
              starDimension="40px"
              starSpacing="5px"
            />
            <Typography style={{marginLeft: '20px'}} className={classes.rank} variant="h3">{rank_average}</Typography> 
            <Typography style={{display: 'inline-block', color: 'rgba(255,255,255, .5)', align: 'bottom'}} variant="h5">{rank_count}</Typography>        
          </div>
        </Grid>
        <Grid className={classes.bottomBlock} item>
          {
            trailerURL 
            ? <ReactPlayer
                className={classes.player}
                url={trailerURL}
                controls={true}
                height="450px"
                width="740px"
                origin={window.location.origin}
              />
            : <Typography variant="h5">Trailer does not exist :(</Typography>
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieBottomContent