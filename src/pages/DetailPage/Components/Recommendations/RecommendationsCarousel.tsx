import { MovieItemResponse, TVSeriesItemResponse } from 'utils/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '@components/Image'
import Link from 'next/link'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

interface Props {
  list: MovieItemResponse[] | TVSeriesItemResponse[]
}

const RecommendationsCarousel = ({ list }: Props) => {
  return (
    <div className='mb-10'>
      <Swiper cssMode={true} slidesPerView={4} freeMode={true} className='text-start'>
        {list.map(item => {
          const isMovie = 'title' in item
          const itemType = isMovie ? 'movie' : 'tv'
          return item.backdrop_path ? (
            <SwiperSlide key={item.id}>
              <div className='select-none w-60 h-48'>
                <Link href={`/${itemType}/${item.id}`}>
                  <Image
                    src={item.backdrop_path}
                    width={240}
                    height={140}
                    alt=''
                    className='rounded-xl'
                  />
                </Link>
                <div className='flex justify-between gap-4'>
                  <span className='truncate'>{isMovie ? item.title : item.name}</span>
                  <span>{Math.floor(item.vote_average * 10)}%</span>
                </div>
              </div>
            </SwiperSlide>
          ) : null
        })}
      </Swiper>
    </div>
  )
}

export default RecommendationsCarousel
