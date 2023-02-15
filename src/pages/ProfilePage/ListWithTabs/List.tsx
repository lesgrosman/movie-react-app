import { Group } from '../types'
import { Movies, QueryType, TVSeries } from '@utils/types'
import { getListItems } from '../queries'
import { useAuthContext } from 'context/useAuthContext'
import { useQuery } from '@tanstack/react-query'
import Card from './Card'

interface Props {
  type: 'movies' | 'tv'
  group: Group
}

const List = ({ type, group }: Props) => {
  const { session, accountId } = useAuthContext()

  const itemType = type === 'movies' ? 'movie' : 'tv'

  const { data, refetch: refetchList }: QueryType<Movies | TVSeries> = useQuery(
    [`${group}-${itemType}`],
    () => getListItems(session, accountId, group, type),
    {
      enabled: !!session,
    }
  )

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
