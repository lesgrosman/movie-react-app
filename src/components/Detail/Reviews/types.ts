import { Review } from '@utils/types'

export type ReviewTab = {
  id: string
  title: string
  reviews: Review[]
  count: number
}
