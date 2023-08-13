import { QueryKeys } from '@utils/constants'
import { getPersonCredits, getPersonDetail } from './helpers'
import { useQuery } from '@tanstack/react-query'

export const getPersonDetailData = (id: string) =>
  useQuery([`${QueryKeys.PERSON_DETAIL}`, id], () => getPersonDetail(id))

export const getPersonCreditsData = (id: string) =>
  useQuery([`${QueryKeys.PERSON_CREDITS}`, id], () => getPersonCredits(id))
