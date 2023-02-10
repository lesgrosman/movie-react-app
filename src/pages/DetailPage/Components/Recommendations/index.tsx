import { MovieItemResponse, TVSeriesItemResponse } from '@utils/types'
import RecommendationsCarousel from './RecommendationsCarousel'

interface Props {
  recommendations?: MovieItemResponse[] | TVSeriesItemResponse[]
}

const Recommendations = ({ recommendations }: Props) => {
  if (!recommendations || recommendations.length === 0) return null

  return (
    <div className='flex flex-col'>
      <h2>Recommendations</h2>
      <RecommendationsCarousel list={recommendations} />
    </div>
  )
}

export default Recommendations
