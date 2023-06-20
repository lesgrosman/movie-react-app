import { BASE_YOUTUBE } from 'utils/constants'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type Props = {
  trailerUrl?: string
}

const Trailer = ({ trailerUrl }: Props) => {
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  console.log(origin)

  if (!trailerUrl) return null

  return (
    <div className='mb-4'>
      <h2>Trailer</h2>
      <ReactPlayer
        url={`${BASE_YOUTUBE}${trailerUrl}`}
        controls={true}
        height={450}
        width={740}
        origin={origin}
      />
    </div>
  )
}

export default Trailer
