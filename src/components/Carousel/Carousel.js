import React from 'react'
import Slider from 'react-slick'
import { useHistory } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import classes from './Carousel.module.css'

// Setting the Carousel(slick) depending on list in props
const Carousel = ({ list, similar }) => {

  const history = useHistory()

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    dots: !similar,
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
          ? list.map(({ id, poster, title, rank_average, itemType }) => {
            return (
              <div key={id} onClick={() => history.push(`/${itemType}/${id}`)}>
                {
                  similar 
                  ? <img width="93" height="140" src={poster} alt="img"/>
                  : <img width="185" height="278" src={poster} alt="img"/>
                } 
                { !similar ? <h3>{title}</h3> : null }
              </div>
            )
          })
          : null
      }
    </Slider>
  )
}

export default Carousel