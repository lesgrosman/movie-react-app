import { MovieDetailResponse, MovieItem, MovieItemResponse } from 'utils/types'

export const mockResponseMovieItems: MovieItemResponse[] = [
  {
    poster_path: 'poster_path',
    adult: false,
    overview: 'overview',
    release_date: '2009-12-15',
    genre_ids: [1, 2],
    id: 1,
    original_title: 'Title 1',
    original_language: 'English',
    title: 'title',
    backdrop_path: null,
    popularity: 12,
    vote_count: 10,
    video: false,
    vote_average: 122,
  },
  {
    poster_path: null,
    adult: false,
    overview: 'overview',
    release_date: '2009-12-16',
    genre_ids: [1, 2],
    id: 2,
    original_title: 'Title 2',
    original_language: 'English',
    title: 'title 2',
    backdrop_path: null,
    popularity: 12,
    vote_count: 10,
    video: false,
    vote_average: 50,
  },
]

export const mockMovieItems: MovieItem[] = [
  {
    id: 1,
    itemType: 'movie',
    poster: 'poster_path',
    rankAverage: 122,
    title: 'title',
    date: '2009-12-15',
  },
  {
    id: 2,
    itemType: 'movie',
    poster: '',
    rankAverage: 50,
    title: 'title 2',
    date: '2009-12-16',
  },
]

export const mockDetailMovieResponse: MovieDetailResponse = {
  id: 255567,
  adult: false,
  backdrop_path: '/nF2UdLFh61qE5lA4YkMtdcUEGZI.jpg',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    { id: 80, name: 'Crime' },
    { id: 18, name: 'Drama' },
  ],
  homepage: '',
  imdb_id: 'tt0028601',
  original_language: 'en',
  original_title: 'Bad Guy',
  overview:
    'A power-company troubleshooter has his brother get him out of prison by running high voltage to the bars of his cell.',
  popularity: 1.452,
  poster_path: '/3gOODnB0NYyjW8X0UbIZ3Hn9QLX.jpg',
  production_companies: [
    {
      id: 21,
      logo_path: '/aOWKh4gkNrfFZ3Ep7n0ckPhoGb5.png',
      name: 'Metro-Goldwyn-Mayer',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '1937-08-27',
  revenue: 0,
  runtime: 69,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: '',
  title: 'Bad Guy',
  video: false,
  vote_average: 0,
  vote_count: 0,
}
