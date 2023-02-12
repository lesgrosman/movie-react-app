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
  type: 'movies' | 'tv'
}

const Card = ({ id, imageUrl, title, release, description, rating, type }: Props) => {
  const itemType = type === 'tv' ? 'tv' : 'movie'
  return (
    <div className='w-full rounded-xl border-[1px] shadow-md flex'>
      <div>
        <Image src={imageUrl} alt={imageUrl} width={133} height={200} className='rounded-l-xl' />
      </div>
      <div className='w-full p-3 flex flex-col justify-between'>
        <div className='flex gap-2 items-center'>
          <CircularProgress value={rating} size={40} />
          <div className='flex flex-col'>
            <Link href={`/${itemType}/${id}`}>
              <h3 className='mb-0 cursor-pointer hover:text-emerald-500'>{title}</h3>
            </Link>
            <span className='text-gray-400'>
              <LocalizedDate date={release} isRaw />
            </span>
          </div>
        </div>
        <span>{description}</span>
        <div className='flex'>Some actions will be there</div>
      </div>
    </div>
  )
}

export default Card
