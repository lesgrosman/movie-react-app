export type AccountDetail = {
  avatar: {
    gravatar: {
      hash: string
    }
    tmdb: {
      avatar_path: string
    }
  }
  id: number
  name: string
  username: string
  include_adult: boolean
  iso_639_1: string
  iso_3166_1: string
}
