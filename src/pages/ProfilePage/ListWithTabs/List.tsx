import { Group } from '../types'
import { Movies, TVSeries } from '@utils/types'
import { getGroupItemsData } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import Card from './Card'

interface Props {
  type: 'movies' | 'tv'
  group: Group
}

const List = ({ type, group }: Props) => {
  const { session, accountId } = useAuthContext()

  const itemType = type === 'movies' ? 'movie' : 'tv'

  const { data, refetch: refetchList } = getGroupItemsData<Movies | TVSeries>({
    session,
    accountId,
    group,
    type,
  })

  if (!data) return null

  return (
    <div className='flex flex-col gap-6'>
      {data?.results?.map(elem => (
        <Card
          key={elem.id}
          id={elem.id}
          title={'name' in elem ? elem.name : elem.title}
          description={elem.overview}
          rating={elem.vote_average}
          release={'release_date' in elem ? elem.release_date : elem.first_air_date}
          imageUrl={elem.poster_path || ''}
          type={itemType}
          refetchList={refetchList}
        />
      ))}
    </div>
  )
}

export default List
