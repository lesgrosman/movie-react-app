import axios from 'axios'

const api = '1f28dfddc7456645d53d767c58b4324c'
const base = 'https://api.themoviedb.org/3'

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

const getResource = async (url) => {
  const res = await fetch(`${base}${url}`)
  if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
  return await res.json()
} 

export const getDataById = async (type, id) => { // Getting content by Id by type(movie/tv) and id
  if (type === 'person') {
    const person = await getResource(`/${type}/${id}?api_key=${api}&language=en-US`)
    const movieCredits = await getResource(`/${type}/${id}/movie_credits?api_key=${api}&language=en-US`)
    const tvCredits = await getResource(`/${type}/${id}/tv_credits?api_key=${api}&language=en-US`)
  
    return {...person, movieCredits, tvCredits}
  }
  const movie =  await getResource(`/${type}/${id}?api_key=${api}&language=en-US`)
  const credits = await getResource(`/${type}/${id}/credits?api_key=${api}&language=en-US`)
  const trailer = await getResource(`/${type}/${id}/videos?api_key=${api}&language=en-US`)
  const trailerList = trailer.results
  return {...movie, ...credits, trailerList}


}

