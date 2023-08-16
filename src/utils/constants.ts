import { Genre } from './types'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_BACKDROP = 'https://image.tmdb.org/t/p/original'
export const BASE_IMAGE = 'https://image.tmdb.org/t/p/w500'
export const BASE_YOUTUBE = 'https://www.youtube.com/watch?v='

export const genres: Genre[] = [
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 18,
    name: 'Drama',
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
  SEARCH_TV = 'search-tv',
  SEARCH_RESULTS = 'search-results',
  SEARCH_DATA = 'search',
  TOP_RATED_MOVIES = 'top-rated-movies',
  TRENDING_MOVIES_MAIN_GROUP = 'trending-movies-main-group',
  TRENDING_TV_MAIN_GROUP = 'trending-tv-main-group',
  TRENDING_ALL_MAIN_GROUP = 'trending-all-main-group',
  // detail
  MOVIE_DETAIL = 'movie-detail',
  MOVIE_SIMILAR = 'movie-similar',
  MOVIE_VIDEOS = 'movie-videos',
  MOVIE_CREDITS = 'movie-credits',
  MOVIE_ACCOUNT_STATE = 'movie-account-state',
  TV_DETAIL = 'tv-detail',
  TV_SIMILAR = 'tv-similar',
  TV_VIDEOS = 'tv-videos',
  TV_CREDITS = 'tv-credits',
  TV_ACCOUNT_STATE = 'tv-account-state',
  // person
  PERSON_DETAIL = 'person-detail',
  PERSON_CREDITS = 'person-credits',
}
