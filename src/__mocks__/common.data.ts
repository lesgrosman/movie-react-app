import { Genre, Language, ProductionCompany, ProductionCountry } from '../utils/types'

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
    iso_639_1: 'asd',
    name: 'asd',
  },
]
