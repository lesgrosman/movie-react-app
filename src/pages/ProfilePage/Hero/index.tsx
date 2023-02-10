import { AccountDetail } from '../types'
import { QueryKeysProfile } from '../constants'
import { QueryType } from '@utils/types'
import { getAccountDetail } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import Image from '@components/Image'

const Hero = () => {
  const { user } = useAuthContext()
  const { data }: QueryType<AccountDetail> = useQuery([QueryKeysProfile.ACCOUNT_DETAILS], () =>
    getAccountDetail(user)
  )

  if (!data) return null

  return (
    <div className='flex gap-8 pt-6 mb-4 h-[300px]'>
      <div className='absolute w-full top-0 left-0 -z-10 bg-gradient-to-r from-teal-300 to-teal-900 border h-[300px]' />
      <div className='flex-shrink-0'>
        <Image
          src={data.avatar.tmdb.avatar_path}
          alt='avatar'
          width={150}
          height={150}
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Hero
