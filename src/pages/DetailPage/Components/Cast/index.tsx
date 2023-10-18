import { PersonItem } from 'utils/types'
import Carousel from './Carousel'

interface Props {
  cast: PersonItem[]
}

const Cast = ({ cast }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='px-2'>
        <h2 className='mb-0 font-montserratAlt'>Top billed Cast</h2>
      </div>
      {cast.length ? <Carousel list={cast} /> : <span>-</span>}
    </div>
  )
}

export default Cast
