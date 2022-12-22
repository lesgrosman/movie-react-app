import { CrewMember, Genre, Language, ProductionCompany, ProductionCountry } from '../utils/types'

export const mockGenres: Genre[] = [
  {
    id: 1,
    name: 'Horror',
  },
  {
    id: 2,
    name: 'Comedy',
  },
]

export const mockProductionCompanies: ProductionCompany[] = [
  {
    id: 1,
    logo_path: null,
    name: 'Paramount',
    origin_country: 'USA',
  },
]

export const mockProductionCountries: ProductionCountry[] = [
  {
    iso_3166_1: 'asdasda',
    name: 'USA',
  },
]

export const mockLanguages: Language[] = [
  {
    english_name: 'English',
    iso_639_1: 'asd',
    name: 'asd',
  },
]

export const mockCrewMembers: CrewMember[] = [
  {
    adult: false,
    gender: null,
    id: 1,
    name: 'John Doe',
    original_name: 'John Doe',
    department: 'Production',
    known_for_department: 'Acting',
    job: 'Producer',
    popularuty: 1,
    credit_id: 'alskj123',
    profile_path: 'profile',
  },
  {
    adult: false,
    gender: null,
    id: 1,
    name: 'Johny Depp',
    original_name: 'Johny Depp',
    department: 'Production',
    known_for_department: 'Acting',
    job: 'Producer',
    popularuty: 1,
    credit_id: 'alskj123',
    profile_path: 'profile',
  },
  {
    adult: false,
    gender: null,
    id: 2,
    name: 'Jack White',
    original_name: 'Jack White',
    department: 'Directing',
    known_for_department: 'Directing',
    job: 'Director',
    popularuty: 2,
    credit_id: 'alskj123',
    profile_path: 'profile',
  },
]
