import { Genre, MovieSectionWithTabs } from './types'

export const BASE_URL = 'https://api.themoviedb.org/3'
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
  TOP_RATED_MOVIES = 'top-rated-movies',
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

export const popularSection: MovieSectionWithTabs = {
  title: 'What is popular',
  tabs: [
    {
      id: 1,
      title: 'Movies',
      url: `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`,
      queryKey: QueryKeys.POPULAR_MOVIES_MAIN_GROUP,
    },
    {
      id: 2,
      title: 'TV Series',
      url: `${BASE_URL}/tv/popular?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&page=1`,
      queryKey: QueryKeys.POPULAR_TV_MAIN_GROUP,
    },
  ],
}

export const genresSection: MovieSectionWithTabs = {
  title: 'Best rated by genres',
  tabs: [
    {
      id: 1,
      title: 'Comedy',
      url: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
      queryKey: QueryKeys.COMEDY_MAIN_GROUP,
    },
    {
      id: 2,
      title: 'Thriller',
      url: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=53`,
      queryKey: QueryKeys.THRILLER_MAIN_GROUP,
    },
    {
      id: 3,
      title: 'Horror',
      url: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
      queryKey: QueryKeys.HORROR_MAIN_GROUP,
    },
    {
      id: 4,
      title: 'Drama',
      url: `${BASE_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_DB_API}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=18`,
      queryKey: QueryKeys.DRAMA_MAIN_GROUP,
    },
  ],
}

export const trendeingSection: MovieSectionWithTabs = {
  title: 'Trending now',
  tabs: [
    {
      id: 1,
      title: 'All',
      url: `${BASE_URL}/trending/all/week?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
      queryKey: QueryKeys.POPULAR_MOVIES_MAIN_GROUP,
    },
    {
      id: 2,
      title: 'Movies',
      url: `${BASE_URL}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
      queryKey: QueryKeys.POPULAR_TV_MAIN_GROUP,
    },
    {
      id: 3,
      title: 'TV Series',
      url: `${BASE_URL}/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
      queryKey: QueryKeys.POPULAR_TV_MAIN_GROUP,
    },
  ],
}
