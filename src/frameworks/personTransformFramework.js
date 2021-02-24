import { checkImage } from './transformFramework'

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
    movies: getItems(sortItems(movieCredits), 'movie'),
    tvs: getItems(sortItems(tvCredits), 'tv')
  }
}

function sortItems(object) {
  const array = object.cast
  let temp = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j].vote_average > array[i].vote_average) {
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}

function getItems(array, type) {
  return array.map(item => {
    return {
      id: item.id,
      title: type === 'movie' ? item.title : item.name,
      rank_average: item.vote_average,
      itemType: type
    }
  })
}

