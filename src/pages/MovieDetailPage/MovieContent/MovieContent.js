import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AboutTable from './AboutTable'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings'
import classes from './MovieContent.module.css'

const useStyles = makeStyles({
  root: {
    marginTop: '100px'
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  image: {
    borderRadius: '10px'
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
    color: rank_average =>rank_average >= 7 ? 'green' : rank_average < 5 ? 'red' : 'grey',
    fontWeight: 500,
    marginRight: '10px'
  },
  cast: {
    marginTop: '30px'
  }

})


const MovieContent = ({ movie, type }) => {

  const { 
    title, 
    cast,
    overview, 
    rank_average, 
    rank_count,
    poster, 
    trailerURL 
  } = movie
  const classes = useStyles(rank_average)


  const rating = [classes.Rating] 

  if (rank_average >= 7) {
    rating.push(classes.good)
  } else if (rank_average < 5) {
    rating.push(classes.bad)
  } else {
    rating.push(classes.mid)
  }

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.left} item md={3}>
        <img className={classes.image} src={poster} alt="img"/>
      </Grid>
      <Grid item md={6}>
        <div className={classes.about}>
          <Typography variant="h4">{title}</Typography>
          <AboutTable movie={movie} type={type}/>
        </div>
      </Grid>
      <Grid className={classes.right} item md={3}>
          <Typography className={classes.rank} variant="h4">{rank_average}</Typography>
          <Typography style={{display: 'inline-block'}} variant="h5">{rank_count}</Typography>
        <Typography className={classes.cast} variant="h6">Cast:</Typography>
        {
          cast.map(person => {
            return <Typography >{person}</Typography>
          })
        }
      </Grid>

    </Grid>
    // <div className={classes.MovieContent}>
    //   <div className={classes.MovieDescription}>
    //     <h2>{title}</h2>
    //     <img src={poster} alt="img" />
    //     <StarRatings
    //       rating={rank_average}
    //       starRatedColor="#f3d250"
    //       numberOfStars={10}
    //       name="rating"
    //       starDimension="40px"
    //       starSpacing="5px"
    //     />
    //     <span className={rating.join(' ')}>{ rank_average ? rank_average.toString() : null}</span>
    //     <h4>Anntotation:</h4>
    //     <span>{overview}</span>
    //     <Link to={{
    //       pathname: "/player/",
    //       title: title
    //     }}
    //     >
    //       <button className={classes.platBtn}>Play movie</button>
    //     </Link>
    //   </div>
    //     {
    //       trailerURL 
    //       ? <ReactPlayer
    //           className={classes.MoviePlayer}
    //           url={trailerURL}
    //           controls={true}
    //           height="450px"
    //           width="740px"
    //           origin={window.location.origin}
    //         />
    //       : <h1>Trailer does not exist :(</h1>
    //     }
    // </div>
  )
}

export default MovieContent