import { SearchPersonItem } from '../types'
import Image from '@components/Image'
import Link from 'next/link'

interface Props {
  person: SearchPersonItem
}

const PersonCard = ({ person }: Props) => {
  return (
    <div className='w-full flex'>
      <Image
        src={person.profile_path ?? ''}
        alt={person.name}
        width={90}
        height={70}
        className='rounded-xl'
        noImage='/assets/noImage.png'
      />
      <div className='w-full p-3 flex flex-col'>
        <div className='flex gap-2'>
          <div className='flex flex-col'>
            <Link href={`/person/${person.id}`}>
              <h3 className='mb-0 cursor-pointer hover:text-emerald-500'>{person.name}</h3>
            </Link>
            <div className='flex'>
              <p className='mr-1'>{person.known_for_department}</p>
              {!!person.known_for.length && ' • '}
              {!!person.known_for.length && (
                <div className='ml-1 flex gap-2 flex-wrap'>
                  {person.known_for.map((item, index) => (
                    <Link
                      key={item.id}
                      href={`/${item.media_type}/${item.id}`}
                      className='hover:text-emerald-400'
                    >
                      {item.name ?? item.title}
                      {index !== person.known_for.length - 1 && ', '}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCard
