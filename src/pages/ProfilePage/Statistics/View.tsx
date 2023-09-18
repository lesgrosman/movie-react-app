import { Bar, BarChart, XAxis } from 'recharts'
import { RatedMovieItemResponse, RatedTVSeriesItemResponse, SimpleItem } from '@utils/types'
import { useMemo } from 'react'
import PieGraph from './PieGraph'

type Hash = {
  [key: number | string]: number
}

interface Props {
  movies: {
    results: RatedMovieItemResponse[]
  }
  tv: {
    results: RatedTVSeriesItemResponse[]
  }
  allGenres: SimpleItem[]
}

const View = ({ movies, tv, allGenres }: Props) => {
  const totalRatings = useMemo(() => {
    return movies?.results.length + tv?.results.length
  }, [movies, tv])

  const barData = useMemo(() => {
    return Array.from(Array(10).keys()).map(num => ({
      id: `${num + 1}`,
      name: `${num + 1}`,
      value: [...movies.results, ...tv.results].filter(item => item.rating === num + 1).length,
    }))
  }, [movies, tv])

  const mostViewedGenred = useMemo(() => {
    const all = [
      ...movies.results.map(movie => movie.genre_ids),
      ...tv.results.map(movie => movie.genre_ids),
    ].flat()

    const hashmap: Hash = all.reduce((acc: Hash, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})

    const genreId = Object.keys(hashmap).reduce((a, b) => (hashmap[a] > hashmap[b] ? a : b))

    return allGenres.find(item => `${item.id}` === genreId)
  }, [movies, tv])

  return (
    <div className='flex justify-between w-full'>
      <div>
        <span className='text-xl'>Total ratings</span>
        <h1 className='text-primary-default text-5xl'>{totalRatings}</h1>
      </div>
      <div>
        <span className='text-xl'>Most watched genre</span>
        <h1 className='text-primary-default text-5xl'>{mostViewedGenred?.name}</h1>
      </div>
      <div>
        <span className='text-xl'>Quick rating review</span>
        <div className='h-full'>
          <BarChart width={250} height={70} data={barData}>
            <XAxis dataKey='name' tickSize={3} tick={{ fontSize: '12px' }} />
            <Bar dataKey='value' fill='#12b981' />
          </BarChart>
        </div>
      </div>
      <PieGraph movies={movies} tv={tv} allGenres={allGenres} />
    </div>
  )
}

export default View
