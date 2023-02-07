import { PersonItem } from 'utils/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'components/Image'
import Link from 'next/link'
import SwiperCore, { Navigation } from 'swiper'

SwiperCore.use([Navigation])

interface Props {
  list: PersonItem[]
}

const CastCarousel = ({ list }: Props) => {
  return (
    <div>
      <Swiper cssMode={true} slidesPerView={6} freeMode={true} className='text-start h-80'>
        {list?.map(({ id, name, character, profileUrl }) => (
          <SwiperSlide key={id}>
            <div className='select-none w-[154px] border-[1px] rounded-xl h-72 shadow-lg'>
              <div className='relative w-full pt-[66.66%] h-52'>
                <div className='absolute top-0 left-0 right-0 bottom-0'>
                  <Image fill src={profileUrl || ''} alt={name} className='rounded-t-xl' />
                </div>
              </div>
              <Link href=''>
                <h4 className='ml-2 mb-0 hover:text-cyan-600'>{name}</h4>
              </Link>
              <h5 className='ml-2 text-slate-400 text-xs'>{character}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CastCarousel
