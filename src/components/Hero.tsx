import NextImage from 'next/image'
import SearchInput from './SearchInput/SearchInput'

const Hero = () => {
  return (
    <div className='w-ful h-96 relative bg-blend-hue'>
      <NextImage src='/assets/starWars1.jpeg' alt='' fill className='absolute -z-10' />
      <div className='absolute w-full h-full bg-blue-800 opacity-60' />
      <SearchInput innerClassName='absolute left-1/2 bottom-5 w-1/2 -translate-x-1/2' />
    </div>
  )
}

export default Hero
