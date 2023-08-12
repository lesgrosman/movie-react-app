import { MovieOrTv } from '@utils/types'
import { getSearchData } from './queries'
import { useEffect } from 'react'
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

  if (!data || isLoading) return <>Loading</>

  return (
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
    </div>
  )
}

export default List
