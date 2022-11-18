import { Nullable } from 'utils/types'
import React from 'react'

interface Props {
  year?: string
  countries: string
  genres: string
  tagline?: Nullable<string>
  directors: string
  writers: string
  producers: string
}

export default function AboutTable({
  year = '',
  countries,
  genres,
  tagline = '',
  directors,
  writers,
  producers,
}: Props) {
  const createData = (name: string, info: string) => {
    return { name, info }
  }

  const rowsMovie = [
    createData('Year', year),
    createData('Countries', countries),
    createData('Genres', genres),
    createData('Slogan', tagline || '-'),
    createData('Director', directors),
    createData('Writer', writers),
    createData('Producer', producers),
  ]

  const rows = rowsMovie

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex flex-col gap-1'>
        {rows.map(row => (
          <div key={row.name} className='flex justify-between border-b border-gray-700'>
            <h4>{row.name}</h4>
            <span>
              {' '}
              {Array.isArray(row.info) && row.info.length !== 0
                ? row.info.join(', ')
                : !row.info
                ? '-'
                : row.info}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
