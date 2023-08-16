import { SearchType } from '../types'
import CircularProgress from '@components/CircularProgress'
import Image from '@components/Image'
import Link from 'next/link'
import LocalizedDate from '@utils/components/LocalizedDate'

interface Props {
  id: number
  imageUrl: string
  title: string
  release: string
  description: string
  rating: number
  type: SearchType
}

const MovieCard = ({ id, imageUrl, title, release, description, rating, type }: Props) => {
  return (
    <Link
      href={`/${type}/${id}`}
      className='w-full rounded-xl border-[1px] shadow-md flex hover:scale-[101%] transition duration-100'
    >
      <div>
        <Image
          src={imageUrl}
          alt={imageUrl}
          width={133}
          height={200}
          className='rounded-l-xl'
          noImage='/assets/noImage.png'
        />
      </div>
      <div className='w-full p-3 flex flex-col justify-between'>
        <div className='flex gap-2 items-center'>
          <CircularProgress value={rating} size={40} innerClassName='sm:block hidden' />
          <div className='flex flex-col'>
            <h3 className='mb-0 cursor-pointer line-clamp-2'>{title}</h3>
            <span className='text-gray-400'>
              <LocalizedDate date={release} isRaw />
            </span>
          </div>
        </div>
        <span className='line-clamp-3 text-slate-500'>{description}</span>
      </div>
    </Link>
  )
}

export default MovieCard
