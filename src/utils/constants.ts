import { Genre } from './types'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_IMAGE = 'https://image.tmdb.org/t/p/w185/'
export const BASE_YOUTUBE = 'https://www.youtube.com/watch?v='

export const genres: Genre[] = [
  {
    id: 35,
    name: 'common.genres.comedy',
  },
  {
    id: 53,
    name: 'common.genres.thriller',
  },
  {
    id: 27,
    name: 'common.genres.horror',
  },
  {
    id: 18,
    name: 'common.genres.drama',
  },
]

export enum QueryKeys {
  POPULAR_MOVIES_MAIN_GROUP = 'popular-movies-main-group',
  POPULAR_TV_MAIN_GROUP = 'popular-tv-main-group',
  COMEDY_MAIN_GROUP = 'comedy-main-grup',
  THRILLER_MAIN_GROUP = 'triller-main-grup',
  HORROR_MAIN_GROUP = 'horror-main-grup',
  DRAMA_MAIN_GROUP = 'drama-main-grup',
  SEARCH_MOVIES = 'search-movies',
  // detail
  MOVIE_DETAIL = 'movie-detail',
  MOVIE_SIMILAR = 'movie-similar',
  MOVIE_VIDEOS = 'movie-videos',
  MOVIE_CREDITS = 'movie-credits',
  TV_DETAIL = 'tv-detail',
  TV_SIMILAR = 'tv-similar',
  TV_VIDEOS = 'tv-videos',
  TV_CREDITS = 'tv-credits',
}
