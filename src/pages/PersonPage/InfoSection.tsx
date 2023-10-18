import { PersonDetail } from './types'
import Image from '@components/Image'
import LocalizedDate from '@utils/components/LocalizedDate'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  detail: PersonDetail
}

const InfoSection = ({ detail }: Props) => {
  const isSmall = useWindowSize('sm')

  return (
    <>
      <h1 className='sm:hidden text-center mb-4'>{detail.name}</h1>
      <div className='flex flex-col gap-6'>
        <div className='flex sm:justify-start  justify-center'>
          <Image
            src={detail.profile_path ?? ''}
            alt={detail.name}
            width={isSmall ? 150 : 300}
            height={isSmall ? 225 : 450}
            className='rounded-xl'
            noImage='/assets/noImage.png'
          />
        </div>
        <div>
          <h3 className='sm:block hidden font-montserratAlt'>Personal information</h3>
          <div className='flex flex-col gap-3 sm:items-start items-center sm:text-start text-center'>
            <div className='flex flex-col'>
              <span className='font-semibold'>Known as</span>
              <span>{detail.known_for_department}</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold'>Gender</span>
              <span>{detail.gender === 1 ? 'Female' : 'Male'}</span>
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold'>Birday</span>
              <span>
                <LocalizedDate date={detail.birthday} isRaw placeholder='-' />
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='font-semibold'>Place of birth</span>
              <span>{detail.place_of_birth || '-'} </span>
            </div>
            {detail.deathday && (
              <div className='flex flex-col'>
                <span className='font-semibold'>Deathday</span>
                <span>
                  <LocalizedDate date={detail.deathday} isRaw placeholder='-' />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSection
