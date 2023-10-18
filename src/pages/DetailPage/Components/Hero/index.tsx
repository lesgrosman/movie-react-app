import { BASE_BACKDROP } from '@utils/constants'
import { CrewMember, Genre, Nullable } from 'utils/types'
import { getGenres } from 'pages/DetailPage/utils'
import { useAverageColor } from '@utils/hooks/useAverageColor'
import { useRouter } from 'next/router'
import ActionButtons from './ActionButtons'
import CircularProgress from '@components/CircularProgress'
import Image from '@components/Image'
import Link from 'next/link'
import LocalizedDate from '@utils/components/LocalizedDate'

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
      } grid grid-cols-12 gap-8 px-0 py-6 mb-4 text-white`}
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
      <div className='flex-shrink-0 col-span-12 sm:col-span-4 flex justify-center sm:justify-end'>
        <Image src={posterPath || ''} alt='' width={300} height={450} className='rounded-xl' />
      </div>
      <div className='col-span-12 sm:col-span-8 sm:px-0 px-2 flex flex-col gap-2'>
        <div className='flex sm:flex-row flex-col sm:justify-start justify-center gap-0'>
          <h1 className='mb-0 sm:text-start text-center'>{title}</h1>
        </div>
        <div className='flex mb-4 sm:justify-start justify-center gap-2 font-semibold'>
          <span>
            <LocalizedDate date={releaseDate} isRaw />
          </span>
          {' • '}
          <span>{getGenres(genres?.slice(0, 3))}</span>
          {runtime && ' • '}
          {runtime && <span>{runtime} min</span>}
        </div>
        <div className='flex items-center gap-6 mb-4 sm:justify-start justify-center'>
          <div className='flex items-center gap-2'>
            <CircularProgress value={vote || 0} size={60} />
            <h3 className='mb-0'>User Score</h3>
          </div>
          <ActionButtons type={isMovie ? 'movie' : 'tv'} />
        </div>

        <div className='mb-4 flex sm:justify-start justify-center'>
          <span className='italic'>{tagline}</span>
        </div>
        <div className='mb-8 sm:text-start text-center'>
          <h3 className='text-primary-dark font-montserratAlt'>Overview</h3>
          <span>{overview}</span>
        </div>
        <div className='flex text-start gap-5 flex-wrap sm:justify-start justify-center'>
          {director && (
            <div>
              <span className='text-sm text-primary-dark font-medium font-montserratAlt'>
                Director
              </span>
              <Link href={`/person/${director.id}`}>
                <h4>{director?.name}</h4>
              </Link>
            </div>
          )}
          {writers?.map(({ id, name }) => (
            <div key={id}>
              <span className='text-sm text-primary-dark font-medium font-montserratAlt'>
                Screenplay
              </span>
              <Link href={`/person/${id}`}>
                <h4>{name}</h4>
              </Link>
            </div>
          ))}
          {producers?.map(({ id, name }) => (
            <div key={id}>
              <span className='text-sm text-primary-dark font-medium font-montserratAlt'>
                Producer
              </span>
              <Link href={`/person/${id}`}>
                <h4>{name}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailHero
