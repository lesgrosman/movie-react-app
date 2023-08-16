import { BASE_YOUTUBE } from 'utils/constants'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import useWindowSize from '@utils/hooks/useWindowSize'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

type Props = {
  trailerUrl?: string
}

const Trailer = ({ trailerUrl }: Props) => {
  const [origin, setOrigin] = useState('')
  const isSmall = useWindowSize('sm')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  if (!trailerUrl) return null

  return (
    <div className='mb-4 px-2'>
      <h2>Trailer</h2>
      <ReactPlayer
        url={`${BASE_YOUTUBE}${trailerUrl}`}
        controls={true}
        height={isSmall ? 200 : 450}
        width={isSmall ? 375 : 740}
        origin={origin}
      />
    </div>
  )
}

export default Trailer
