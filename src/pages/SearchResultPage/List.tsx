import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { MovieOrTv } from '@utils/types'
import { getSearchData } from './queries'
import { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from '@components/Spinner'

interface Props {
  type: MovieOrTv
  param: string
  totalPages: number
}

const List = ({ type, param, totalPages }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetching } = getSearchData({
    type,
    param,
    totalPages,
  })

  const [showUpButton, setShowUpButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowUpButton(true)
    } else {
      setShowUpButton(false)
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (hasNextPage) {
      const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollPosition = window.scrollY

        if (scrollPosition + windowHeight >= documentHeight) {
          fetchNextPage()
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [hasNextPage])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!data || isLoading) return <>Loading</>

  return data.pages[0].results.length ? (
    <div className='flex flex-col gap-6'>
      {data.pages.map(page =>
        page.results.map(item => (
          <Card
            key={item.id}
            id={item.id}
            title={'name' in item ? item.name : item.title}
            description={item.overview}
            rating={item.vote_average}
            release={'release_date' in item ? item.release_date : item.first_air_date}
            imageUrl={item.poster_path || ''}
            type={type}
          />
        ))
      )}
      {isFetching && (
        <div className='w-full flex justify-center'>
          <Spinner innerClassName='w-12 h-12' />
        </div>
      )}
      {showUpButton && (
        <button className='fixed bottom-3 right-3' onClick={handleScrollToTop}>
          <ArrowUpCircleIcon className='w-14 h-14 text-emerald-400' />
        </button>
      )}
    </div>
  ) : (
    <div className='w-full flex justify-center'>
      <span className='text-center'>No results </span>
    </div>
  )
}

export default List
