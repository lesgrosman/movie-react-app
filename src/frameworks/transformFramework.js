import imageNotFound from '../services/imageNotFound.jpeg'

const baseImg = 'https://image.tmdb.org/t/p/w185/'
const baseYT = 'https://www.youtube.com/watch?v='

export const transform = (itemObj, type) => {
  return {
    id: itemObj.id,
    title: itemObj.title ? itemObj.title : itemObj.name,
    genres: getGenres(itemObj.genres),
    year: itemObj.release_date ? getYear(itemObj.release_date) : getYear(itemObj.first_air_date),
    countries: getCountries(itemObj.production_countries),
    directors: type === 'movie' ? getTeam(itemObj.crew, 'Director', type) : getTeam(itemObj.crew, 'Directing', type),
    writers: type === 'movie' ? getTeam(itemObj.crew, 'Screenplay', type) : getTeam(itemObj.crew, 'Writing', type),
    producers: getTeam(itemObj.crew, 'Producer', 'movie'),
    cast: getCast(itemObj.cast),
    overview: itemObj.overview,
    tagline: `"${itemObj.tagline}"`,
    rank_average: itemObj.vote_average,
    rank_count: itemObj.vote_count,
    poster: checkImage(itemObj.poster_path),
    trailerURL: checkTrailer(itemObj.trailerList)
  }
}

function getGenres(genresList) {
  return genresList.map(obj => obj.name)
}

function getYear(date) {
  return date.slice(0, 4)
}

function getCountries(countriesList) {
  return countriesList.map(country => country.name)
}

export function checkImage(image) {
  if (image === null) {   
    return imageNotFound
  }

  return `${baseImg}${image}`
}

function checkTrailer(list) {
  if (list.length === 0) {
    return null
  }
  return `${baseYT}${list[0].key}`
}

function getTeam(crewList, job, type) {
  if (type === 'movie') {
    const team = crewList.filter(item => item.job === job)
    return team.map(item => item.name).slice(0, 3)
  }
  const tv_team = crewList.filter(item => item.known_for_department === job)
  return tv_team.map(item => item.name).slice(0, 3)
}

function getCast(castList) {
  return castList.map(person => person.name).slice(0, 10)
}


