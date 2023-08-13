import { Movies, TVSeries } from '@utils/types'
import { SearchType } from '../types'
import { getSearchData } from '../queries'
import ButtonUp from '@components/ButtonUp'
import MovieCard from './MovieCard'
import Spinner from '@components/Spinner'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import useShowUpButton from '@utils/hooks/useShowUpButton'

interface Props {
  type: SearchType
  param: string
  totalPages: number
}

const MovieList = ({ type, param, totalPages }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetching } = getSearchData<
    Movies | TVSeries
  >({
    type,
    param,
    totalPages,
  })

  const { showUpButton } = useShowUpButton()

  useInfiniteScroll<Movies | TVSeries>({ hasNextPage, fetchNextPage })

  if (!data || isLoading) return <>Loading</>

  return data.pages[0].results.length ? (
    <div className='flex flex-col gap-6'>
      {data.pages.map(page =>
        page.results.map(item => (
          <MovieCard
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
      <ButtonUp isVisible={showUpButton} />
    </div>
  ) : (
    <div className='w-full flex justify-center'>
      <span className='text-center'>No results</span>
    </div>
  )
}

export default MovieList
