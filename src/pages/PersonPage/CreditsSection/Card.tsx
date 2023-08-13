import { MediaItem } from '../types'
import CircularProgress from '@components/CircularProgress'
import Image from '@components/Image'
import Link from 'next/link'

interface Props {
  item: MediaItem
}

const Card = ({ item }: Props) => {
  return (
    <div className='flex py-1 border-b-[1px] items-center justify-between'>
      <div className='flex'>
        <Image
          src={item.poster || ''}
          alt={item.title}
          width={50}
          height={60}
          noImage='/assets/noImage.png'
        />
        <div className='p-3 flex flex-col'>
          <div className='mb-2'>
            <Link href={`/${item.mediaType}/${item.id}`} className='hover:text-emerald-400'>
              <h4 className='mb-0'>{item.title}</h4>
            </Link>
            {item.mediaType === 'tv' && <span className='text-sm text-slate-400'>TV Series</span>}
          </div>
          {item.character && <span className='text-slate-400'>as {item.character}</span>}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        {item.release !== 'Upcoming' && <CircularProgress value={item.vote ?? 0} size={36} />}
        <h4>{item.release}</h4>
      </div>
    </div>
  )
}

export default Card
