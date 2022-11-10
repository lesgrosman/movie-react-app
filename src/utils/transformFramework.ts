import {
  CastMember,
  CrewMember,
  Genre,
  MovieItem,
  MovieItemResponse,
  MovieResponse,
  Nullable,
  ProductionCountry,
  TVSeriesItemResponse,
  TVSeriesResponse,
  Trailer,
} from './types'
import sortByParam from './sortFramework'

const BASE_IMG = 'https://image.tmdb.org/t/p/w185/'
const BASE_YT = 'https://www.youtube.com/watch?v='

export function getMovies(array: MovieItemResponse[]) {
  return array.map(item => {
    return {
      id: item.id,
      title: item.title,
      rankAverage: item.vote_average,
      poster: checkImage(item.poster_path),
      itemType: 'movie',
    }
  })
}

export function getTVSeries(array: TVSeriesItemResponse[]) {
  return array.map(item => {
    return {
      id: item.id,
      title: item.name,
      rankAverage: item.vote_average,
      poster: checkImage(item.poster_path),
      itemType: 'tv',
    }
  })
}

export const mapTVSeriesObject = (itemObj: TVSeriesResponse) => {
  return {
    id: itemObj.id,
    title: itemObj.name,
    genres: getGenres(itemObj.genres),
    year: getYear(itemObj.first_air_date),
    countries: getCountries(itemObj.production_countries),
    directors: getTeam(itemObj.credits.crew, 'Directing', 'tv'),
    writers: getTeam(itemObj.credits.crew, 'Writing', 'tv'),
    producers: getTeam(itemObj.credits.crew, 'Producer', 'movie'),
    cast: getCast(itemObj.credits.cast),
    overview: itemObj.overview,
    tagline: itemObj.tagline,
    rankAverage: itemObj.vote_average,
    rankCount: itemObj.vote_count,
    poster: checkImage(itemObj.poster_path),
    trailerURL: checkTrailer(itemObj.trailers),
    similar: getSimilarItems(sortByParam(itemObj.similar, 'vote_count'), 'tv'),
  }
}

export const mapMovieObject = (itemObj: MovieResponse) => {
  return {
    id: itemObj.id,
    title: itemObj.title,
    genres: getGenres(itemObj.genres),
    year: getYear(itemObj.release_date),
    countries: getCountries(itemObj.production_countries),
    directors: getTeam(itemObj.credits.crew, 'Director', 'movie'),
    writers: getTeam(itemObj.credits.crew, 'Screenplay', 'movie'),
    producers: getTeam(itemObj.credits.crew, 'Producer', 'movie'),
    cast: getCast(itemObj.credits.cast),
    overview: itemObj.overview,
    tagline: itemObj.tagline,
    rankAverage: itemObj.vote_average,
    rankCount: itemObj.vote_count,
    poster: checkImage(itemObj.poster_path),
    trailerURL: checkTrailer(itemObj.trailers),
    similar: getSimilarItems(sortByParam(itemObj.similar, 'vote_count'), 'movie'),
  }
}

function getGenres(genresList: Genre[]) {
  return genresList.map(obj => obj.name)
}

function getYear(date: string) {
  return date.slice(0, 4)
}

function getCountries(countriesList: ProductionCountry[]) {
  return countriesList.map(country => country.name)
}

export function checkImage(image: Nullable<string>) {
  if (!image) {
    return '/assets/imageNotFound.jpeg'
  }

  return `${BASE_IMG}${image}`
}

function checkTrailer(list: Trailer[]) {
  if (list.length === 0) {
    return null
  }
  return `${BASE_YT}${list[0].key}`
}

function getTeam(crewList: CrewMember[], job: string, type: string) {
  if (type === 'movie') {
    const team = crewList.filter(item => item.job === job)
    return team.map(item => item.name).slice(0, 3)
  }
  const tvTeam = crewList.filter(item => item.known_for_department === job)

  return tvTeam.map(item => item.name).slice(0, 3)
}

function getCast(castList: CastMember[]) {
  return castList
    .map(person => {
      return {
        id: person.id,
        name: person.name,
      }
    })
    .slice(0, 10)
}

function getSimilarItems(
  arr: MovieItemResponse[] | TVSeriesItemResponse[],
  type: string
): MovieItem[] {
  return arr.map(item => {
    return {
      id: item.id,
      title: 'title' in item ? item?.title : item.name,
      poster: checkImage(item.poster_path),
      rankAverage: item.vote_average,
      itemType: type,
    }
  })
}
