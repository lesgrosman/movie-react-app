import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {
  innerClassName?: string
}

const SearchInput = ({ innerClassName }: Props) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (searchValue) {
      e.preventDefault()
      router.push(`/search/${searchValue}`)
      setSearchValue('')
    }
  }

  return (
    <div className={innerClassName}>
      <form onSubmit={handleSubmit}>
        <div className='relative'>
          <input
            autoComplete='off'
            placeholder='Search movie'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            name='query'
            className='outline-none rounded-3xl px-3 py-2 w-full'
          />
          <button
            className='absolute bg-emerald-500 h-full rounded-3xl px-4 text-white right-0'
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchInput
