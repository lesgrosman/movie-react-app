import sortByParam from './sortFramework';
import imageNotFound from '../services/imageNotFound.jpeg';

const BASE_IMG = 'https://image.tmdb.org/t/p/w185/';
const BASE_YT = 'https://www.youtube.com/watch?v=';

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

export const mapMovieObject = (itemObj, type) => {
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
    trailerURL: checkTrailer(itemObj.trailerList),
    similar: getSimilarItems(sortByParam(itemObj.similarItems, 'vote_count'), type),
  }
};

function getGenres(genresList) {
  return genresList.map(obj => obj.name);
};

function getYear(date) {
  return date.slice(0, 4);
};

function getCountries(countriesList) {
  return countriesList.map(country => country.name);
};

export function checkImage(image) {
  if (image === null) {   
    return imageNotFound;
  }

  return `${BASE_IMG}${image}`;
};

function checkTrailer(list) {
  if (list.length === 0) {
    return null
  }
  return `${BASE_YT}${list[0].key}`;
};

function getTeam(crewList, job, type) {
  if (type === 'movie') {
    const team = crewList.filter(item => item.job === job)
    return team.map(item => item.name).slice(0, 3);
  }
  const tv_team = crewList.filter(item => item.known_for_department === job)

  return tv_team.map(item => item.name).slice(0, 3);
};

function getCast(castList) {
  return castList.map(person => {
    return {
      id: person.id,
      name: person.name
    }
  }).slice(0, 10)
};

function getSimilarItems(arr, type) {
  return arr.map(item => {
    return {
      id: item.id,
      title: type === 'movie' ? item.title : item.name,
      poster: checkImage(item.poster_path),
      rank_average: item.vote_average,
      itemType: type
    }
  });
};



