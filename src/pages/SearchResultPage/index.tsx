import { searchSubmit } from '@utils/analytics'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SearchResults from './SearchResulsts'

const SearchResultPage = () => {
  const router = useRouter()

  const { result } = router.query

  const [searchQuery, setSearchQuery] = useState(result as string)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value ?? '')
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (searchQuery) {
      searchSubmit(searchQuery)
      e.preventDefault()
      router.push(`/search/${searchQuery}`)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='relative mb-3'>
        <input
          type='text'
          autoComplete='off'
          placeholder='Search movie, TV series or person...'
          value={searchQuery}
          onChange={handleSearch}
          className='outline-none rounded-3xl px-3 py-2 w-full border-[1px] border-gray-200 focus:border-primary-default text-gray-400'
        />
        <button
          className='absolute bg-primary-default h-full rounded-3xl px-4 text-black right-0'
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <SearchResults />
    </div>
  )
}
export default SearchResultPage
