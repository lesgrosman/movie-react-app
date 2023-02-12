import { COLORS, RADIAN } from '../constants'
import { Cell, Legend } from 'recharts'
import { Pie, PieChart, Tooltip } from 'recharts'
import { PieChartProps } from '../types'
import { RatedMovieItemResponse, RatedTVSeriesItemResponse, SimpleItem } from '@utils/types'
import { useMemo } from 'react'

interface Props {
  movies: {
    results: RatedMovieItemResponse[]
  }
  tv: {
    results: RatedTVSeriesItemResponse[]
  }
  allGenres: SimpleItem[]
}
const PieGraph = ({ movies, tv, allGenres }: Props) => {
  const ratedGenres = useMemo(() => {
    const all = [
      ...movies.results.map(movie => movie.genre_ids),
      ...tv.results.map(movie => movie.genre_ids),
    ].flat()

    return [...new Set(all)]
  }, [movies, tv])

  const genreData = useMemo(() => {
    const all = ratedGenres.map(genre => ({
      id: genre,
      name: allGenres.find(elem => elem.id === genre)?.name,
      count: [...movies.results, ...tv.results].filter(item => item.genre_ids.includes(genre))
        .length,
    }))
    if (all.length < 5) {
      return all
    } else {
      const shown = all.sort((a, b) => b.count - a.count).slice(0, 4)
      return [
        ...shown,
        {
          id: 'other',
          name: 'Other',
          count: all
            .filter(item => !shown.includes(item))
            .map(el => el.count)
            .reduce((acc, item) => acc + item, 0),
        },
      ]
    }
  }, [movies, tv])

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: PieChartProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div>
      <span className='text-xl'>Most watched genres</span>
      <div className='h-full'>
        <PieChart width={300} height={170}>
          <Pie
            dataKey='count'
            isAnimationActive={false}
            data={genreData}
            cx='50%'
            cy='50%'
            outerRadius={80}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {genreData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign='top' layout='vertical' align='right' />
        </PieChart>
      </div>
    </div>
  )
}

export default PieGraph
