import 'font-awesome/css/font-awesome.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { MovieItem, Nullable } from 'utils/types'
import { useRouter } from 'next/router'
import Image from 'components/Image'
import Slider from 'react-slick'

interface Props {
  list: Nullable<MovieItem[]>
  similar?: boolean
  type?: 'tv' | 'movie'
}

const Carousel = ({ list, similar, type = 'movie' }: Props) => {
  const router = useRouter()

  const redirectToDetail = (item: MovieItem) => {
    router.push(`/${type}/${item.id}`)
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
      {list
        ? list.map((item: MovieItem) => (
            <div key={item.id} onClick={() => redirectToDetail(item)}>
              <Image
                width={similar ? 93 : undefined}
                height={similar ? 140 : undefined}
                imageUrl={item.poster}
                alt='img'
                className='cursor-pointer hover:-translate-y-2 transition ease-in-out hover:scale-110 duration-200'
              />
              {!similar && <h3 className='text-center'>{item.title}</h3>}
            </div>
          ))
        : null}
    </Slider>
  )
}

export default Carousel
