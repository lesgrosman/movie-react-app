import { CrewMember, Genre, ProductionCompany, ProductionCountry } from 'utils/types'

export const getCrewByJob = (arr?: CrewMember[], job = ''): string => {
  return (
    arr
      ?.filter(person => person.job === job)
      ?.map(person => person.name)
      .join(', ') || '-'
  )
}

export const getCountries = (arr?: ProductionCountry[]): string => {
  return arr?.map(contry => contry.name).join(', ') || '-'
}

export const getCompanies = (arr?: ProductionCompany[]): string => {
  return arr?.map(company => company.name).join(', ') || '-'
}

export const getGenres = (arr?: Genre[]): string => {
  return arr?.map(genre => genre.name).join(', ') || '-'
}
