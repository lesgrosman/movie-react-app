import { MovieItemResponse, MovieOrTv, TVSeriesItemResponse } from '@utils/types'
import Card from './Card'

interface Props {
  type: MovieOrTv
  data: MovieItemResponse[] | TVSeriesItemResponse[]
}

const List = ({ type, data }: Props) => {
  return (
    <div className='flex flex-col gap-6'>
      {data.map(item => (
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
      ))}
    </div>
  )
}

export default List
