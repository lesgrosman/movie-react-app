import { useAuthContext } from 'context/useAuthContext'
import Dropdown from './Dropdown'
import Link from 'next/link'

const Header = () => {
  const { session } = useAuthContext()

  return (
    <div className='text-white fixed top-0 left-0 w-full z-20 overflow-hidden bg-slate-800 shadow-xl p-5 h-20'>
      <div className='flex justify-between max-w-7xl m-auto'>
        <div className='flex justify-start gap-4'>
          <Link href='/'>
            <h2>Home page</h2>
          </Link>
        </div>
        {session ? (
          <Dropdown />
        ) : (
          <Link href='/login'>
            <h2>Log In</h2>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
