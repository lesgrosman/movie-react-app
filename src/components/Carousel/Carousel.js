import React from 'react'
import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'

const useStyles = makeStyles((theme) => ({
  slider: {
    outline: 'none',
  },
  box: {
    '& img': {
      margin: 'auto',
      boxShadow: '0 8px 6px -6px black',
      cursor: 'pointer',
      transition: '0.3s',
    },
    '& img:hover': {
      opacity: 0.8,
    },
    '& .MuiTypography-root': {
      textAlign: 'center',
    },
  }
}));

// Setting the Carousel(slick) depending on list in props
const Carousel = ({ list, similar }) => {
  const classes = useStyles();
  const history = useHistory()

  const redirectToDetail = (item) => {
    history.push(`/${item.itemType}/${item.id}`);
  };

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    // dots: !similar,
    responsive: [
      {
        breakpoint: 1223,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            infinite: false,
          }
      },
      {
        breakpoint: 1038,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            infinite: false,
          }
      },
      {
        breakpoint: 853,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            infinite: false,
          }
      },
      {
        breakpoint: 668,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            infinite: false,
          }
      },
      {
        breakpoint: 483,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: false,
          }
      }

    ]
  }

  return (
    <Slider {...settings}>
      { list && list.map((item) => (
        <Box 
          className={classes.box}
          key={item.id} 
          onClick={() => redirectToDetail(item)}
        >
          { similar ? 
            <img width="93" height="140" src={item.poster} alt="img"/>
            : <img width="185" height="278" src={item.poster} alt="img"/>
          } 
          {!similar && <Typography variant="h5">{item.title}</Typography>}
        </Box>
        ))
      }
    </Slider>
  )
}

export default Carousel