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
}

const Carousel = ({ list, similar }: Props) => {
  return (
    <div className='relative flex'>
      <Swiper
        modules={[Navigation]}
        slidesPerView={similar ? 7 : 6}
        freeMode={true}
        navigation={true}
        className='relative'
      >
        {list?.map(item => {
          const [isHover, setIsHover] = useState(false)
          const { id, poster, itemType, title } = item
          return (
            <SwiperSlide
              key={id}
              className='flex w-full flex-col p-0 select-none'
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Link key={id} href={`/${itemType}/${id}`}>
                <Image
                  width={similar ? 93 : 185}
                  height={similar ? 140 : 278}
                  src={poster}
                  alt={title}
                />
              </Link>
              {isHover && (
                <Link key={`background-${id}`} href={`/${itemType}/${id}`}>
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
                      <h4 className='text-center'>{title}</h4>
                    ) : (
                      <h1 className='text-center'>{title}</h1>
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
