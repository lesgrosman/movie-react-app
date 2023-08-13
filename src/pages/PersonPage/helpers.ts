import { BASE_URL } from '@utils/constants'
import { Credits, PersonDetail } from './types'
import { fetcher } from 'helpers/api.helpers'

export const getPersonDetail = async (id: string) =>
  fetcher<PersonDetail>(`${BASE_URL}/person/${id}?language=en-US`)

export const getPersonCredits = async (id: string) =>
  fetcher<Credits>(`${BASE_URL}/person/${id}/combined_credits?language=en-US`)
