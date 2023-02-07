import NextImage from 'next/image'
import SearchInput from './SearchInput/SearchInput'

const HeroMain = () => {
  return (
    <div className='w-ful h-96 relative bg-blend-hue'>
      <h1 className='text-center absolute text-white z-10 text-5xl left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2'>
        Find out everything you want to know about movies
      </h1>
      <NextImage
        src='/assets/starWars1.jpeg'
        alt=''
        objectFit='cover'
        fill
        className='absolute -z-10'
        priority
      />
      <div className='absolute w-full h-full bg-blue-800 opacity-60' />
      <SearchInput innerClassName='absolute left-1/2 bottom-5 w-1/2 -translate-x-1/2' />
    </div>
  )
}

export default HeroMain
