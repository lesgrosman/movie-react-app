import { PersonDetail } from './types'
import Image from '@components/Image'
import LocalizedDate from '@utils/components/LocalizedDate'

interface Props {
  detail: PersonDetail
}

const InfoSection = ({ detail }: Props) => (
  <div className='flex flex-col gap-6'>
    <Image
      src={detail.profile_path ?? ''}
      alt={detail.name}
      width={300}
      height={450}
      className='rounded-xl'
      noImage='/assets/noImage.png'
    />
    <div>
      <h3>Personal information</h3>
      <div className='flex flex-col gap-3'>
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
)

export default InfoSection
