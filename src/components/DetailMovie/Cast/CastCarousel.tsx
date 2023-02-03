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
      <Swiper cssMode={true} slidesPerView={6} freeMode={true} className='relative text-start'>
        {list?.map(({ id, name, character, profileUrl }) => (
          <SwiperSlide key={id} className='flex flex-col p-2 select-none w-36 h-64 border-[1px]'>
            <div className='mb-5'>
              <Image
                width={138}
                height={175}
                src={profileUrl || ''}
                alt={name}
                className='rounded-xl hover:scale-105 transition'
              />
            </div>
            <Link href=''>
              <h4 className='ml-2 mb-0 hover:text-cyan-600'>{name}</h4>
            </Link>
            <h5 className='ml-2 text-slate-400'>{character}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CastCarousel
