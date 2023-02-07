import { MovieItem, Nullable } from 'utils/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import CircularProgress from 'components/CircularProgress'
import Image from 'components/Image'
import Link from 'next/link'
import LocalizedDate from '@utils/components/LocalizedDate'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

interface Props {
  list: Nullable<MovieItem[]>
  similar?: boolean
}

const Carousel = ({ list, similar }: Props) => {
  return (
    <div>
      <Swiper
        cssMode={true}
        slidesPerView={similar ? 7 : 6}
        freeMode={true}
        className='relative text-start'
      >
        {list?.map(({ id, poster, itemType, title, rankAverage, date }) => (
          <SwiperSlide key={id} className='flex w-full flex-col p-2 select-none'>
            <div className='relative mb-5'>
              <Link href={`/${itemType}/${id}`}>
                <Image
                  width={similar ? 93 : 185}
                  height={similar ? 140 : 278}
                  src={poster}
                  alt={title}
                  className='rounded-xl hover:scale-105 transition'
                />
              </Link>
              <CircularProgress value={rankAverage} innerClassName='absolute left-3 -bottom-5' />
            </div>
            <Link href={`/${itemType}/${id}`}>
              <h4 className='ml-2 mb-0 hover:text-cyan-600'>{title}</h4>
            </Link>
            <h5 className='ml-2 text-slate-400'>
              <LocalizedDate date={date} isRaw placeholder='' />
            </h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
