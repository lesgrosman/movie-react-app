import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import StarRatings from 'react-star-ratings'
import { checkImage } from '../../services/services'
import Error from '../UI/Error/Error'
import { getDataById, getTrailerById } from '../../services/services'
import Loader from '../UI/Loader/Loader'
import classes from './MovieDetailPage.module.css'

const baseYT = 'https://www.youtube.com/watch?v='

const MovieDetailPage = ({ movieId, type }) => {

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => { // After render getting the movie or tv info (depending on type) and trailer from YT
    getDataById(type, movieId) 
      .then(response => {
        setMovie(response.data)
        setLoading(false)
      })
      .catch(e => {
        setError(e)
        setLoading(false)
      })
    getTrailerById(type, movieId)
      .then(trailer => {
        const url = trailer.data.results[0]
        url && (setTrailerUrl(`${baseYT}${url.key}`))
      })
  }, [movieId, type])

  const { title, overview, vote_average, poster_path, name } = movie
  const movie_name = title ? title : name 

///// Set the color of rating 
  const rating = [classes.Rating] 

  if (vote_average >= 7) {
    rating.push(classes.good)
  } else if (vote_average < 5) {
    rating.push(classes.bad)
  } else {
    rating.push(classes.mid)
  }

  const View = ( // Info content  
    <div className={classes.MovieContent}>
      <div className={classes.MovieDescription}>
        <h2>{movie_name}</h2>
        <img src={checkImage(poster_path)} alt="img" />
        <StarRatings
          rating={vote_average}
          starRatedColor="#f3d250"
          numberOfStars={10}
          name="rating"
          starDimension="40px"
          starSpacing="5px"
        />
        <span className={rating.join(' ')}>{ vote_average ? vote_average.toString() : null}</span>
        <h4>Anntotation:</h4>
        <span>{overview}</span>
        <Link to={{
          pathname: "/player/",
          title: movie_name
        }}
        >
          <button className={classes.platBtn}>Play movie</button>
        </Link>
      </div>
        {
          trailerUrl 
          ? <ReactPlayer
              className={classes.MoviePlayer}
              url={trailerUrl}
              controls={true}
              height="450px"
              width="740px"
              origin={window.location.origin}
            />
          : <h1>Trailer does not exist :(</h1>
        }
    </div>
  )
// Checking which content to shows
  const errorMessage = error ? <Error error={error}/>: null
  const spinner = loading ? <Loader/> : null
  const content = !(spinner || errorMessage) ? View : null

  return (
    <div className={classes.MovieDetailPage}>
      <h1>Movie Detail Page</h1>
      {spinner}
      {errorMessage}
      {content}
    </div>
  )
}

export default MovieDetailPage
