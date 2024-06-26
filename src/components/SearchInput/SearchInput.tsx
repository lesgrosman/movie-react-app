import { searchSubmit } from '@utils/analytics'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {
  innerClassName?: string
}

const SearchInput = ({ innerClassName }: Props) => {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (query) {
      searchSubmit(query)
      e.preventDefault()
      router.push(`/search/${query}`)
      setQuery('')
    }
  }

  return (
    <div className={innerClassName}>
      <form onSubmit={handleSubmit}>
        <div className='relative'>
          <input
            autoComplete='off'
            placeholder='Search movie, TV series or person...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            name='query'
            className='outline-none rounded-3xl px-3 py-2 w-full text-gray-400'
          />
          <button
            className='absolute bg-primary-default h-full rounded-3xl px-10 right-0'
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
