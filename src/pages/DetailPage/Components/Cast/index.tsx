import { PersonItem } from 'utils/types'
import CastCarousel from './CastCarousel'

interface Props {
  cast: PersonItem[]
}

const Cast = ({ cast }: Props) => {
  return (
    <div className='flex flex-col'>
      <h2>Top billed Cast</h2>
      {cast.length ? <CastCarousel list={cast} /> : <span>-</span>}
    </div>
  )
}

export default Cast
