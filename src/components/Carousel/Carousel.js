import React from 'react'
import Slider from 'react-slick'
import {useHistory} from 'react-router-dom'
import {checkImage} from '../../services/services'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';
import classes from './Carousel.module.css'

// Setting the Carousel(slick) depending on list in props
const Carousel = ({movies}) => {

const history = useHistory()

const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6
  }

    return (
        <Slider {...settings} className={classes.Slider}>
        {
          movies.map(({id, poster_path, title, first_air_date, name}) => {
            const type = first_air_date ? 'tv' : 'movie' // Checking is item a movie or tv show
            const movie_name = title ? title : name // Movie has prop title, and tv show - name(by default). Setting the general name of item
            return (
              <div key={id} onClick={() => history.push(`/${type}/${id}`)}> {/* Adding the id to the path by choosing the movie */ }
                <img width="185" height="278" src={checkImage(poster_path)} alt="hello"/> {/* Check if image exists */ }
                <h3>{movie_name}</h3>
              </div>
            )
          })
        }
      </Slider>
    )
}

export default Carousel