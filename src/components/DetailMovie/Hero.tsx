import { CrewMember, Genre, Nullable } from 'utils/types'
import { getGenres } from 'pages/DetailPage/utils'
import CircularProgress from '../CircularProgress'
import Image from '../Image'

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
}: Props) => {
  const director = crew?.filter(person => person.job === 'Director')[0]
  const writers = crew?.filter(person => person.job === 'Screenplay').slice(0, 2)
  const producers = crew?.filter(person => person.job === 'Producer').slice(0, 3)

  return (
    <div className='flex gap-8 pt-6 mb-4' style={{ height: '500px' }}>
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
        <div className='flex items-center gap-2 mb-4'>
          <CircularProgress value={vote || 0} innerClassName='w-20 h-20' />
          <h3 className='mb-0'>User Score</h3>
        </div>
        <div className='mb-4'>
          <span className='italic'>{tagline}</span>
        </div>
        <div className='mb-8'>
          <h3>Overview</h3>
          <span>{overview}</span>
        </div>
        <div className='flex text-start gap-5 flex-wrap'>
          <div>
            <span className='italic text-xs'>Director</span>
            <h4>{director?.name}</h4>
          </div>
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
