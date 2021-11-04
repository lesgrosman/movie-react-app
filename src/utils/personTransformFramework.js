import { checkImage } from './transformFramework';
import sortByParam from './sortFramework';

export const personTransrofm = (itemObj) => {
  const { id, name, place_of_birth, birthday, deathday, gender, movieCredits, tvCredits, profile_path } = itemObj
  return {
    id,
    name,
    place_of_birth,
    birthday,
    deathday,
    gender: gender === 1 ? 'female' : 'male',
    poster: checkImage(profile_path),
    movies: getItems(sortByParam(movieCredits.cast, 'popularity'), 'movie'),
    tvs: getItems(sortByParam(tvCredits.cast, 'popularity'), 'tv')
  }
};

export function getItems(array, type) {
  return array.map(item => {
    return {
      id: item.id,
      title: type === 'movie' ? item.title : item.name,
      rank_average: item.vote_average,
      poster: checkImage(item.poster_path),
      itemType: type
    }
  })
};

