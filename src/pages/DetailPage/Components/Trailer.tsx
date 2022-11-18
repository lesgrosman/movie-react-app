import { BASE_YOUTUBE } from 'utils/constants'
import ReactPlayer from 'react-player'

type Props = {
  trailerUrl?: string
}

const Trailer = ({ trailerUrl }: Props) => {
  return (
    <>
      {trailerUrl ? (
        <ReactPlayer
          url={`${BASE_YOUTUBE}${trailerUrl}`}
          controls={true}
          height={450}
          width={740}
          origin={window.location.origin}
        />
      ) : (
        <h4>{'Trailer does not exist :('}</h4>
      )}
    </>
  )
}

export default Trailer
