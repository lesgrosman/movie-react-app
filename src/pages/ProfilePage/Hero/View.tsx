import { AccountDetail } from '../types'
import { RatedMovieItemResponse, RatedTVSeriesItemResponse } from '@utils/types'
import { useMemo } from 'react'
import CircularProgress from '@components/CircularProgress'
import Image from '@components/Image'

interface Props {
  account: AccountDetail
  movies: {
    results: RatedMovieItemResponse[]
  }
  tv: {
    results: RatedTVSeriesItemResponse[]
  }
}

const View = ({ account, movies, tv }: Props) => {
  const averageMovieRating = useMemo(() => {
    return movies.results.reduce((acc, item) => item.vote_average + acc, 0) / movies.results.length
  }, [movies])

  const averageTvRating = useMemo(() => {
    return tv.results.reduce((acc, item) => item.vote_average + acc, 0) / tv.results.length
  }, [tv])

  return (
    <div className='flex gap-8 pt-6 mb-4 h-[220px]'>
      <div className='absolute w-full top-0 left-0 -z-10 bg-gradient-to-r from-teal-900 to-teal-300 border h-[300px]' />
      <div className='flex-shrink-0'>
        <Image
          src={account.avatar.tmdb.avatar_path}
          alt='avatar'
          width={150}
          height={150}
          className='rounded-full'
        />
      </div>
      <div className='flex flex-col justify-start items-start text-white w-full '>
        <h1>{account.name || account.username}</h1>
        <div className='flex justify-start gap-4'>
          <div className='flex gap-3 items-center'>
            <CircularProgress value={averageMovieRating} size={70} />
            <span>Average Movie rating</span>
          </div>
          <div className='flex gap-3 items-center'>
            <CircularProgress value={averageTvRating} size={70} />
            <span>Average TV Series rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
