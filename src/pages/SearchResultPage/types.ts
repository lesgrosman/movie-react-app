import { MovieOrTv, Nullable } from '@utils/types'

export type SearchType = 'movie' | 'tv' | 'person'

export type Results = {
  total_results: number
  total_pages: number
}

export type SearchPersonItem = {
  id: number
  known_for_department: string
  name: string
  popularuty: number
  profile_path: Nullable<string>
  known_for: Array<{
    id: number
    title?: string
    name?: string
    media_type: MovieOrTv
  }>
}

export type Persons = {
  results: SearchPersonItem[]
  total_pages: number
  total_results: number
  page: number
}
