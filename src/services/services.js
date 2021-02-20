import axios from 'axios'
import imageNotFound from './imageNotFound.jpeg'

const api = '1f28dfddc7456645d53d767c58b4324c'
const base = 'https://api.themoviedb.org/3'
const baseImg = 'https://image.tmdb.org/t/p/w185/'

export const getData = (searchBy, param='') => { // Getting the list of content by genre or type(movie/tv) and parametr for each type

  switch (searchBy) {
    case 'genre':
      return axios.get(
        `${base}/discover/movie?api_key=${api}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=${param}`)
    case 'type':
      return axios.get(`${base}/${param}/popular?api_key=${api}&language=en-US&page=1`)
    default: // searching
      return axios.get(`${base}/search/movie?api_key=${api}&language=en-US&query=${param}&page=1&include_adult=false`)
  }
}

export const getDataById = (type, id) => { // Getting content by Id by type(movie/tv) and id

  if (type === 'movie') {
    return axios.get(`${base}/movie/${id}?api_key=${api}&language=en-US`)
  }

  return axios.get(`${base}/tv/${id}?api_key=${api}&language=en-US&page=1`)
}

export const getTrailerById = (type, id) => { // Get movie or tv show trailer

  if (type === 'movie') {
    return axios.get(`${base}/movie/${id}/videos?api_key=${api}&language=en-US`)
  }

  return axios.get(`${base}/tv/${id}/videos?api_key=${api}&language=en-US`)
}

/////////////////////////////////////

export function checkImage(image) { // if poster doesnt exist show default image
    
  if (image === null) {   
    return imageNotFound
  }

  return `${baseImg}${image}`
}
