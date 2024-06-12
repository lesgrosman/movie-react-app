import { SearchPersonItem } from '../types'
import { clickPerson } from '@utils/analytics'
import Image from '@components/Image'
import Link from 'next/link'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  person: SearchPersonItem
}

const PersonCard = ({ person }: Props) => {
  const isSmall = useWindowSize('sm')

  return (
    <div className='w-full flex'>
      <Link href={`/person/${person.id}`} onClick={() => clickPerson(person.name)}>
        <Image
          src={person.profile_path ?? ''}
          alt={person.name}
          width={90}
          height={70}
          className='rounded-xl'
          noImage='/assets/noImage.png'
        />
      </Link>
      <div className='w-full p-3 flex flex-col'>
        <div className='flex gap-2'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <Link href={`/person/${person.id}`}>
                <h3 className='mb-0 cursor-pointer hover:text-primary-default'>{person.name}</h3>
              </Link>
              <p className='ml-2 sm:hidden flex'>{person.known_for_department}</p>
            </div>

            <div className='flex'>
              <p className='mr-1 sm:block hidden'>{person.known_for_department}</p>
              {!isSmall && !!person.known_for.length && ' • '}
              {!!person.known_for.length && (
                <div className='ml-1 flex gap-1 flex-wrap'>
                  {person.known_for.map((item, index) => (
                    <Link
                      key={item.id}
                      href={`/${item.media_type}/${item.id}`}
                      className='hover:text-primary-light'
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
