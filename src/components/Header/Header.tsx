import Link from 'next/link'
import SearchInput from '../SearchInput/SearchInput'

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 overflow-hidden bg-blue-900 shadow-xl p-5 h-20'>
      <div className='flex justify-between max-w-7xl m-auto'>
        <div className='flex justify-start gap-4'>
          <Link href='/'>
            <h2>Home page</h2>
          </Link>
          <Link href='/top-rated-movies'>
            <h2>Top rated movies</h2>
          </Link>
        </div>
        <SearchInput />
      </div>
    </div>
  )
}

export default Header
