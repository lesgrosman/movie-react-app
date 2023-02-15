import ActionButtons from './ActionButtons'
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
  type: 'movie' | 'tv'
  refetchList: () => void
}

const Card = ({ id, imageUrl, title, release, description, rating, type, refetchList }: Props) => {
  return (
    <div className='w-full rounded-xl border-[1px] shadow-md flex'>
      <div>
        <Image src={imageUrl} alt={imageUrl} width={133} height={200} className='rounded-l-xl' />
      </div>
      <div className='w-full p-3 flex flex-col justify-between'>
        <div className='flex gap-2 items-center'>
          <CircularProgress value={rating} size={40} />
          <div className='flex flex-col'>
            <Link href={`/${type}/${id}`}>
              <h3 className='mb-0 cursor-pointer hover:text-emerald-500'>{title}</h3>
            </Link>
            <span className='text-gray-400'>
              <LocalizedDate date={release} isRaw />
            </span>
          </div>
        </div>
        <span className='line-clamp-2 text-slate-500'>{description}</span>
        <ActionButtons type={type} id={id} refetchList={refetchList} />
      </div>
    </div>
  )
}

export default Card
