import { checkImage } from './transformFramework'
import sortByParam from './sortFramework'

export const personTransrofm = (itemObj) => {
  const {
    id,
    name,
    placeOfBirth,
    birthday,
    deathday,
    gender,
    movieCredits,
    tvCredits,
    profilePath,
  } = itemObj
  return {
    id,
    name,
    placeOfBirth,
    birthday,
    deathday,
    gender: gender === 1 ? 'female' : 'male',
    poster: checkImage(profilePath),
    movies: getItems(sortByParam(movieCredits.cast, 'popularity'), 'movie'),
    tvs: getItems(sortByParam(tvCredits.cast, 'popularity'), 'tv'),
  }
}

export function getItems(array, type) {
  return array.map((item) => {
    return {
      id: item.id,
      title: type === 'movie' ? item.title : item.name,
      rankAverage: item.vote_average,
      poster: checkImage(item.poster_path),
      itemType: type,
    }
  })
}
