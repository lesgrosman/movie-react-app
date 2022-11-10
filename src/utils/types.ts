export type Nullable<T> = T | null

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
  tagline: Nullable<string>
  trailerURL: Nullable<string>
  writers: string[]
  year: string
}

export type Genre = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: Nullable<string>
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type Language = {
  iso_639_1: string
  name: string
}

export type Creator = {
  id: number
  credit_id: string
  name: string
  gender: string
  profile_path: Nullable<string>
}

export type Network = {
  id: number
  name: string
  logo_path: Nullable<string>
  origin_country: string
}

export type EpisodeToAir = {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  still_path: Nullable<string>
  vote_average: number
  vote_count: number
}

export type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
}

export type CastMember = {
  adult: boolean
  gender: Nullable<number>
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularuty: number
  character: string
  credit_id: string
  order: number
}

export type CrewMember = Omit<CastMember, 'character' | 'order'> & {
  profile_path: Nullable<string>
  department: string
  job: string
}

export type Trailer = {
  id: string
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
}

export type MovieItemResponse = {
  poster_path: Nullable<string>
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: Nullable<string>
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export type TVSeriesItemResponse = {
  poster_path: Nullable<string>
  overview: string
  genre_ids: number[]
  id: number
  original_name: string
  original_language: string
  name: string
  backdrop_path: Nullable<string>
  popularity: number
  vote_count: number
  vote_average: number
  first_air_date: string
  origin_country: string[]
}

export type MovieResponse = {
  id: number
  adult: boolean
  backdrop_path: Nullable<string>
  belongs_to_collection: any
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: Nullable<string>
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: Nullable<number>
  spoken_languages: Language[]
  status: string
  tagline: Nullable<string>
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: {
    id: number
    cast: CastMember[]
    crew: CrewMember[]
  }
  trailers: Trailer[]
  similar: MovieItemResponse
}

export type TVSeriesResponse = {
  id: number
  backdrop_path: Nullable<string>
  created_by: Creator[]
  episode_run_time: number[]
  first_air_date: string
  genres: Genre[]
  homepage: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: EpisodeToAir
  name: string
  next_episode_to_air: null
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: Nullable<string>
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  seasons: Season[]
  spoken_languages: Language[]
  status: string
  tagline: string
  type: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: {
    id: number
    cast: CastMember[]
    crew: CrewMember[]
  }
  trailers: Trailer[]
  similar: TVSeriesItemResponse[]
}
