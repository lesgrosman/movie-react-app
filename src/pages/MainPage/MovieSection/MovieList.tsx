import { getMovieListData } from '../queries'
import { transformToPreviewItems } from '@utils/helper'
import { useMemo } from 'react'
import Carousel from '@pages/MainPage/MovieSection/Carousel'
import shortid from 'shortid'
import useWindowSize from '@utils/hooks/useWindowSize'

interface Props {
  url: string
  queryKey: string
}

const skeletonIds = new Array(6).fill(1).map(() => shortid.generate())

const MovieList = ({ url, queryKey }: Props) => {
  const isSmall = useWindowSize('sm')
  const { data, isLoading, error } = getMovieListData({ url, key: queryKey })

  const transformedItems = useMemo(() => {
    return transformToPreviewItems(data?.results)
  }, [data])

  if (isLoading && !data) {
    const count = isSmall ? 2 : 6
    return (
      <div className='flex gap-4 animate-pulse mb-4 sm:mt-10 mt-4'>
        {new Array(count).fill(1).map((_, index) => (
          <div
            key={skeletonIds[index]}
            className='bg-slate-200 sm:w-[185] sm:h-[278px] w-[174px] h-[261px]'
            style={{ width: 185, height: 278 }}
          />
        ))}
      </div>
    )
  }

  if (error || !data) return <>Something went wrong. Please try again later</>

  if (data?.results.length < 1) {
    return <h1 className='text-center'>It seems like there are no movies you are looking for...</h1>
  }

  return <Carousel list={transformedItems} />
}

export default MovieList
