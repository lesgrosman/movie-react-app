import { BASE_URL, QueryKeys } from '@utils/constants'
import { MovieSectionWithTabs } from '@utils/types'

export const popularSection: MovieSectionWithTabs = {
  title: 'What is popular',
  tabs: [
    {
      id: 1,
      title: 'Movies',
      url: `${BASE_URL}/movie/popular?language=en-US&page=1`,
      queryKey: QueryKeys.POPULAR_MOVIES_MAIN_GROUP,
    },
    {
      id: 2,
      title: 'TV Series',
      url: `${BASE_URL}/tv/popular?language=en-US&page=1`,
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
      url: `${BASE_URL}/discover/movie?language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
      queryKey: QueryKeys.COMEDY_MAIN_GROUP,
    },
    {
      id: 2,
      title: 'Thriller',
      url: `${BASE_URL}/discover/movie?language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=53`,
      queryKey: QueryKeys.THRILLER_MAIN_GROUP,
    },
    {
      id: 3,
      title: 'Horror',
      url: `${BASE_URL}/discover/movie?language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
      queryKey: QueryKeys.HORROR_MAIN_GROUP,
    },
    {
      id: 4,
      title: 'Drama',
      url: `${BASE_URL}/discover/movie?language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=18`,
      queryKey: QueryKeys.DRAMA_MAIN_GROUP,
    },
  ],
}

export const trendingSection: MovieSectionWithTabs = {
  title: 'Trending now',
  tabs: [
    {
      id: 1,
      title: 'All',
      url: `${BASE_URL}/trending/all/week`,
      queryKey: QueryKeys.TRENDING_ALL_MAIN_GROUP,
    },
    {
      id: 2,
      title: 'Movies',
      url: `${BASE_URL}/trending/movie/week`,
      queryKey: QueryKeys.TRENDING_MOVIES_MAIN_GROUP,
    },
    {
      id: 3,
      title: 'TV Series',
      url: `${BASE_URL}/trending/tv/week`,
      queryKey: QueryKeys.TRENDING_TV_MAIN_GROUP,
    },
  ],
}
