import { useRouter } from 'next/router'
import { useState } from 'react'

const SearchInput = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    router.push(`/search/${searchValue}`)
    setSearchValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoComplete='off'
        placeholder='Search movie'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        name='query'
        className='outline-none rounded-lg bg-slate-500 px-3 py-2'
      />
    </form>
  )
}

export default SearchInput
