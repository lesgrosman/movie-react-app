import { Persons } from '../types'
import { getSearchData } from '../queries'
import ButtonUp from '@components/ButtonUp'
import PersonCard from './PersonCard'
import Spinner from '@components/Spinner'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import useShowUpButton from '@utils/hooks/useShowUpButton'

interface Props {
  param: string
  totalPages: number
}

const PersonList = ({ param, totalPages }: Props) => {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetching } = getSearchData<Persons>({
    type: 'person',
    param,
    totalPages,
  })

  const { showUpButton } = useShowUpButton()

  useInfiniteScroll<Persons>({ hasNextPage, fetchNextPage })

  if (!data || isLoading) return <>Loading</>

  return data.pages[0].results.length ? (
    <div className='flex flex-col gap-6'>
      {data.pages.map(page => page.results.map(item => <PersonCard key={item.id} person={item} />))}
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

export default PersonList
