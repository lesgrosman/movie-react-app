export type MovieItem = {
  id: number
  itemType: string
  poster: string
  rankAverage: number
  title: string
}

export type MovieDetail = {
  id: number
  title: string
  cast: { id: number; name: string }[]
  countries: string[]
  directors: string[]
  genres: string[]
  overview: string
  poster: string
  producers: string[]
  rankAverage: number
  rankCount: number
  similar: MovieItem[]
  tagline: string
  trailerURL: string
  writers: string[]
  year: string
}

export type Nullable<T> = T | null
