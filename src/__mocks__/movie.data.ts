import { MovieItem, MovieItemResponse } from 'utils/types'

export const mockResponseMovieItems: MovieItemResponse[] = [
  {
    poster_path: 'poster_path',
    adult: false,
    overview: 'overview',
    release_date: 'string',
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
    release_date: 'string',
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
  },
  {
    id: 2,
    itemType: 'movie',
    poster: '',
    rankAverage: 50,
    title: 'title 2',
  },
]
