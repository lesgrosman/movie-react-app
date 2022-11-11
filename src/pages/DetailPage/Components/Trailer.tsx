import { BASE_YOUTUBE } from 'utils/constants'
import ReactPlayer from 'react-player'
import Typography from '@material-ui/core/Typography'

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
        <Typography variant='h5'>{'Trailer does not exist :('}</Typography>
      )}
    </>
  )
}

export default Trailer
