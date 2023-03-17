import { BASE_BACKDROP } from '@utils/constants'
import { CrewMember, Genre, Nullable } from 'utils/types'
import { getGenres } from 'pages/DetailPage/utils'
import { useAverageColor } from '@utils/hooks/useAverageColor'
import { useRouter } from 'next/router'
import ActionButtons from './ActionButtons'
import CircularProgress from '@components/CircularProgress'
import Image from '@components/Image'

interface Props {
  title?: string
  genres?: Genre[]
  releaseDate?: string
  vote?: number
  runtime?: Nullable<number>
  posterPath?: Nullable<string>
  overview?: Nullable<string>
  tagline?: Nullable<string>
  crew?: CrewMember[]
  bgImage?: Nullable<string>
}

const DetailHero = ({
  title,
  genres,
  releaseDate,
  vote,
  runtime,
  posterPath,
  overview,
  tagline,
  crew,
  bgImage,
}: Props) => {
  const router = useRouter()
  const { averageColor } = useAverageColor(posterPath)

  const isMovie = router.pathname.includes('/movie/')
  const director = crew?.filter(person =>
    isMovie ? person.job === 'Director' : person.known_for_department === 'Directing'
  )[0]
  const writers = crew?.filter(person => person.job === 'Screenplay').slice(0, 2)
  const producers = crew?.filter(person => person.job === 'Producer').slice(0, 3)

  return (
    <div
      className={`${
        bgImage ? 'relative' : 'bg-gradient-to-r from-cyan-700 to-blue-900'
      } flex gap-8 px-28 py-6 mb-4 text-white`}
    >
      {bgImage && averageColor && (
        <>
          <Image
            src={`${BASE_BACKDROP}${bgImage}`}
            alt=''
            fill
            className='object-cover absolute -z-20'
            priority
            loading='eager'
          />
          <div
            style={{
              background: `${averageColor}`,
            }}
            className={`absolute left-0 top-0 w-full h-full opacity-80 -z-10`}
          />
        </>
      )}
      <div className='flex-shrink-0'>
        <Image src={posterPath || ''} alt='' width={300} height={450} className='rounded-xl' />
      </div>
      <div>
        <div className='flex'>
          <h1 className='mb-0'>{title}</h1>&nbsp;
          <h1 className='text-normal'>({releaseDate?.split('-')[0] || '-'})</h1>
        </div>
        <div className='flex mb-4'>
          <span>{releaseDate}</span>
          &nbsp; &#x2022; &nbsp;
          <span>{getGenres(genres?.slice(0, 3))}</span>
          &nbsp; &#x2022; &nbsp;
          <span>{runtime} min</span>
        </div>
        <div className='flex items-center gap-6 mb-4'>
          <div className='flex items-center gap-2'>
            <CircularProgress value={vote || 0} size={60} />
            <h3 className='mb-0'>User Score</h3>
          </div>
          <ActionButtons type={isMovie ? 'movie' : 'tv'} />
        </div>

        <div className='mb-4'>
          <span className='italic'>{tagline}</span>
        </div>
        <div className='mb-8'>
          <h3>Overview</h3>
          <span>{overview}</span>
        </div>
        <div className='flex text-start gap-5 flex-wrap'>
          {director && (
            <div>
              <span className='italic text-xs'>Director</span>
              <h4>{director?.name}</h4>
            </div>
          )}
          {writers?.map(({ id, name }) => (
            <div key={id}>
              <span className='italic text-xs'>Screenplay</span>
              <h4>{name}</h4>
            </div>
          ))}
          {producers?.map(({ id, name }) => (
            <div key={id}>
              <span className='italic text-xs'>Producer</span>
              <h4>{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailHero
