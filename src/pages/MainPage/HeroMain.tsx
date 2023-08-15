import NextImage from 'next/image'
import SearchInput from '../../components/SearchInput/SearchInput'

const HeroMain = () => {
  return (
    <div className='w-full h-96 relative flex justify-center items-end py-10 px-5'>
      <NextImage
        src='/assets/starWars1.jpeg'
        alt=''
        fill
        className='object-cover absolute -z-10'
        priority
      />
      <SearchInput innerClassName='md:w-3/4 w-full' />
    </div>
  )
}

export default HeroMain
