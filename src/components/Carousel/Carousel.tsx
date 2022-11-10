import 'font-awesome/css/font-awesome.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { MovieItem, Nullable } from 'utils/types'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
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
  },
}))

interface Props {
  list: Nullable<MovieItem[]>
  similar: boolean
}

// Setting the Carousel(slick) depending on list in props
const Carousel = ({ list, similar }: Props) => {
  const navigate = useNavigate()
  const classes = useStyles()

  const redirectToDetail = (item: MovieItem) => {
    navigate(`/${item.itemType}/${item.id}`)
  }

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
        },
      },
      {
        breakpoint: 1038,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 853,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: false,
        },
      },
      {
        breakpoint: 483,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: false,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {list &&
        list.map((item: MovieItem) => (
          <Box className={classes.box} key={item.id} onClick={() => redirectToDetail(item)}>
            {similar ? (
              <img width='93' height='140' src={item.poster} alt='img' />
            ) : (
              <img width='185' height='278' src={item.poster} alt='img' />
            )}
            {!similar && <Typography variant='h5'>{item.title}</Typography>}
          </Box>
        ))}
    </Slider>
  )
}

export default Carousel
