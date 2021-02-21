import React from 'react'
import Slider from 'react-slick'
import { useHistory } from 'react-router-dom'
import { checkImage } from '../../frameworks/transformFramework'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import classes from './Carousel.module.css'

// Setting the Carousel(slick) depending on list in props
const Carousel = ({ list }) => {

  const history = useHistory()

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 1223,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            infinite: false,
            dots: true
          }
      },
      {
        breakpoint: 1038,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            infinite: false,
            dots: true
          }
      },
      {
        breakpoint: 853,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            infinite: false,
            dots: true
          }
      },
      {
        breakpoint: 668,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            infinite: false,
            dots: true
          }
      },
      {
        breakpoint: 483,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: false,
            dots: false
          }
      }

    ]
  }

  return (
    <Slider {...settings} className={classes.Slider}>
      { 
        list 
          ? list.map(({ id, poster_path, title, first_air_date, name }) => {
            const type = first_air_date ? 'tv' : 'movie' // Checking is item a movie or tv show
            const movie_name = title ? title : name // Movie has prop title, and tv show - name(by default). Setting the general name of item
            return (
              <div key={id} onClick={() => history.push(`/${type}/${id}`)}> {/* Adding the id to the path by choosing the movie */ }
                <img width="185" height="278" src={checkImage(poster_path)} alt="img"/> {/* Check if image exists */ }
                <h3>{movie_name}</h3>
              </div>
            )
          })
          : null
      }
    </Slider>
  )
}

export default Carousel