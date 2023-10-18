import { MovieItemResponse, TVSeriesItemResponse } from '@utils/types'
import Carousel from './Carousel'

interface Props {
  recommendations?: MovieItemResponse[] | TVSeriesItemResponse[]
}

const Recommendations = ({ recommendations }: Props) => {
  if (!recommendations || recommendations.length === 0) return null

  return (
    <div className='flex flex-col'>
      <div className='px-2'>
        <h2 className='mb-0 font-montserratAlt'>Recommendations</h2>
      </div>{' '}
      <Carousel list={recommendations} />
    </div>
  )
}

export default Recommendations
