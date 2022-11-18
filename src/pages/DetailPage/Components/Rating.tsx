import StarRatings from 'react-star-ratings'

type Props = {
  title: string
  rankAverage?: number
  rankCount?: number
}

const Rating = ({ title, rankAverage, rankCount }: Props) => {
  return (
    <>
      <h3 className='mb-2'>{title}</h3>
      <div className='flex items-center'>
        <StarRatings
          rating={rankAverage}
          starRatedColor='#ffb300'
          numberOfStars={10}
          name='rating'
          starDimension='40px'
          starSpacing='5px'
        />
        <div className='flex items-end gap-2'>
          <h1 className='ml-4 mb-0'>{rankAverage}</h1>
          <h4 className='text-gray-300'>{rankCount}</h4>
        </div>
      </div>
    </>
  )
}

export default Rating
