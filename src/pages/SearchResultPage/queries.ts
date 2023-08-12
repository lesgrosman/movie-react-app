import { MovieOrTv } from '@utils/types'
import { QueryKeys } from 'utils/constants'
import { getSearchItems, getSearchResults } from './helpers'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

interface Props {
  param?: string
  type: MovieOrTv
  totalPages: number
}

export const getSearchResultsData = ({ param, type }: { param?: string; type: MovieOrTv }) =>
  useQuery([`${QueryKeys.SEARCH_RESULTS}-${type}`, param as string], () =>
    getSearchResults({ param, type })
  )

export const getSearchData = ({ param, type, totalPages }: Props) =>
  useInfiniteQuery(
    [`${QueryKeys.SEARCH_DATA}-${type}`, param as string],
    ({ pageParam = 1 }) => getSearchItems({ param, type, page: pageParam }),
    {
      getNextPageParam: (_, pages) => (pages.length < totalPages ? pages.length + 1 : undefined),
    }
  )
