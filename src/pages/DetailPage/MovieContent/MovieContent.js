import React from 'react'
import { Divider, Grid, Typography, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AboutTable from './AboutTable'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings'

const useStyles = makeStyles({
  container: {
    display: 'flex'
  },
  rootTop: {
    paddingTop: '100px'
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  image: {
    borderRadius: '10px',
    width: '185px',
    height: '278px'
  },
  divider: {
    marginLeft: '30px',
    height: '100%'
  },
  about: {
    display: 'flex',
    flexDirection: 'column'
  },
  bold: {
    fontWeight: 500
  },
  right: {
    paddingLeft: '50px'
  },
  rank: {
    display: 'inline-block',
    color: rank_average =>rank_average >= 7 ? '#00e676' : rank_average < 5 ? '#c50e29' : '#b0bec5',
    fontWeight: 500,
    marginRight: '10px'
  },
  cast: {
    marginTop: '30px'
  },
  rootBottom:{
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


const MovieContent = ({ movie }) => {
  const { title, cast,overview, rank_average, rank_count,poster, trailerURL } = movie
  const classes = useStyles(rank_average)

  return (
    <Fade in={true} timeout={1000}>
      <Grid className={classes.container} container>      
          <Grid className={classes.rootTop} item container>
            <Grid className={classes.left} item md={3}>
              <img className={classes.image} src={poster} alt="img"/>
              <Divider className={classes.divider} orientation="vertical" light flexItem />
            </Grid>
            <Grid item md={6}>
              <div className={classes.about}>
                <Typography variant="h4">{title}</Typography>
                <AboutTable movie={movie}/>
              </div>
            </Grid>
            <Grid className={classes.right} item md={3}>
                <Typography className={classes.rank} variant="h4">{rank_average}</Typography>
                <Typography style={{display: 'inline-block', color: 'rgba(255,255,255, .5)'}} variant="h5">{rank_count}</Typography>
              <Typography className={classes.cast} variant="h6">Cast:</Typography>
              {
                cast.map(person => {
                  return <Typography >{person}</Typography>
                })
              }
            </Grid>
          </Grid>
          <Divider className={classes.divider} orientation="horizontal" light />
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
      </Grid>
    </Fade>
  )
}

export default MovieContent