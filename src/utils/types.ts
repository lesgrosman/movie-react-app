import { AxiosError } from 'axios'
import { UseQueryResult } from '@tanstack/react-query'

export type Tab = {
  id: number
  title: string
  url: string
  queryKey: string
}

export type MovieSectionWithTabs = {
  title: string
  tabs: Tab[]
}

export type QueryType<T> = UseQueryResult<T, AxiosError>

export type Nullable<T> = T | null

export type MovieItem = {
  id: number
  itemType: string
  poster: string
  rankAverage: number
  title: string
  date: string
}

export type PersonItem = Pick<CastMember, 'id' | 'name' | 'character'> & {
  profileUrl: Nullable<string>
}

export type SimpleItem = {
  id: number
  name: string
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
  english_name: string
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
  profile_path: Nullable<string>
}

export type CrewMember = Omit<CastMember, 'character' | 'order'> & {
  department: string
  job: string
}

export type Credits = {
  id: number
  cast: CastMember[]
  crew: CrewMember[]
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

export type Trailers = {
  id: number
  results: Trailer[]
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

export type TVSeriesItemResponse = Omit<
  MovieItemResponse,
  'adult' | 'release_date' | 'original_title' | 'title' | 'video'
> & {
  original_name: string
  name: string
  first_air_date: string
  origin_country: string[]
}

export type RatedMovieItemResponse = MovieItemResponse & {
  rating: number
}

export type RatedTVSeriesItemResponse = TVSeriesItemResponse & {
  rating: number
}

export type Movies = {
  page: number
  results: MovieItemResponse[] | RatedMovieItemResponse[]
  total_pages: number
  totals_results: number
}

export type TVSeries = {
  page: number
  results: TVSeriesItemResponse[] | RatedTVSeriesItemResponse[]
  total_pages: number
  totals_results: number
}

export type MovieDetailResponse = {
  id: number
  adult: boolean
  backdrop_path: Nullable<string>
  belongs_to_collection: Nullable<Record<string, unknown>>
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
}

export type TVSeriesDetailResponse = {
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
}

export type Review = {
  id: number
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: Nullable<string>
    rating: Nullable<number>
  }
  content: string
  created_at: string
  updated_at: string
  url: string
}

export type Reviews = {
  id: number
  page: number
  total_pages: number
  total_results: number
  results: Review[]
}

export type Keywords = {
  id: number
  keywords?: SimpleItem[]
  results?: SimpleItem[]
}
