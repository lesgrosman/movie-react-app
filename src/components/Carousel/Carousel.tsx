import { MovieItem, Nullable } from 'utils/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import Image from 'components/Image'
import Link from 'next/link'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

interface Props {
  list: Nullable<MovieItem[]>
  similar?: boolean
  type?: 'tv' | 'movie'
}

const Carousel = ({ list, similar, type = 'movie' }: Props) => {
  return (
    <div className='relative flex'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={similar ? 7 : 6}
        freeMode={true}
        navigation={true}
        className='relative'
      >
        {list?.map((item, i) => {
          const [isHover, setIsHover] = useState(false)

          return (
            <SwiperSlide
              key={i}
              className='flex w-full flex-col p-0'
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Link key={item.id} href={`/${type}/${item.id}`}>
                <Image
                  width={similar ? 93 : 185}
                  height={similar ? 140 : 278}
                  src={item.poster}
                  alt={item.title}
                />
              </Link>
              {isHover && (
                <Link key={`background-${item.id}`} href={`/${type}/${item.id}`}>
                  <div
                    style={{
                      width: similar ? 93 : 185,
                      height: similar ? 140 : 278,
                    }}
                    className={`transition-all absolute top-0 left-0 cursor-pointer flex items-center justify-center ${
                      isHover ? 'bg-black bg-opacity-75' : 'bg-transparent hidden bg-opacity-0'
                    }`}
                  >
                    {similar ? (
                      <h4 className='text-center'>{item.title}</h4>
                    ) : (
                      <h1 className='text-center'>{item.title}</h1>
                    )}
                  </div>
                </Link>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel
