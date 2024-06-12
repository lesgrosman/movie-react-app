import { MediaItem } from '../types'
import { clickListItem } from '@utils/analytics'
import CircularProgress from '@components/CircularProgress'
import Image from '@components/Image'
import Link from 'next/link'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  item: MediaItem
}

const Card = ({ item }: Props) => {
  const isSmall = useWindowSize('sm')

  return (
    <div className='flex py-1 border-b-[1px] items-center justify-between'>
      <div className='flex'>
        <Image
          src={item.poster || ''}
          alt={item.title}
          width={55}
          height={60}
          noImage='/assets/noImage.png'
        />
        <div className='p-3 flex flex-col'>
          <div className='mb-2'>
            <Link
              href={`/${item.mediaType}/${item.id}`}
              onClick={() => clickListItem(item.mediaType, item.title)}
              className='hover:text-primary-light'
            >
              <h4 className='mb-0'>{item.title}</h4>
            </Link>
            {item.mediaType === 'tv' && <span className='text-sm text-slate-400'>TV Series</span>}
          </div>
          {item.character && <span className='text-slate-400'>as {item.character}</span>}
        </div>
      </div>
      <div className='flex items-center gap-4'>
        {item.release !== 'Upcoming' && (
          <CircularProgress value={item.vote ?? 0} size={isSmall ? 26 : 36} />
        )}
        <h4>{item.release}</h4>
      </div>
    </div>
  )
}

export default Card
