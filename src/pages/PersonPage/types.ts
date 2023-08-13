import { MovieOrTv, Nullable } from '@utils/types'

export enum Department {
  PRODUCTION = 'Production',
  WRITING = 'Writing',
  CAST = 'Cast',
  DIRECTING = 'Directing',
  CAMERA = 'Camera',
}

export type PersonDetail = {
  id: number
  name: string
  biography: string
  birthday: Nullable<string>
  deathday: Nullable<string>
  gender: number
  known_for_department: string
  place_of_birth: Nullable<string>
  profile_path: string
}

export type CastMedia = {
  id: number
  poster_path: Nullable<string>
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
  vote_average: number
  vote_count: number
  character: string
  order: number
  media_type: MovieOrTv
}

export type CrewMedia = {
  id: number
  poster_path: Nullable<string>
  release_date?: string
  first_air_date?: string
  title?: string
  name?: string
  vote_average: number
  vote_count: number
  department: string
  job: string
  media_type: MovieOrTv
}

export type Credits = {
  id: string
  cast: CastMedia[]
  crew: CrewMedia[]
}

export type CreditsModel = {
  cast: CastMedia[]
  directing: CrewMedia[]
  production: CrewMedia[]
  writing: CrewMedia[]
  camera: CrewMedia[]
}

export type TabWithItems = {
  id: Department
  title: Department
  items: MediaItem[]
  itemsCount: number
}

export type MediaItem = {
  id: number
  mediaType: MovieOrTv
  vote: Nullable<number>
  voteCount: number
  release: string
  title: string
  poster: Nullable<string>
  character: Nullable<string>
}
