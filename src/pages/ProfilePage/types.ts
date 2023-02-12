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

export type Group = 'rated' | 'favorite' | 'watchlist'

export type PieChartProps = {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}
