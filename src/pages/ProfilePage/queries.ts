import { BASE_URL } from '../../utils/constants'
import { fetcher } from '../../utils/helper'

export const getAccountDetail = async <Account>(sessionId: string): Promise<Account> =>
  fetcher(`${BASE_URL}/account?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`)

// export const getRatedItems = async <T>(sessionId: string): Promise<T> =>
//   fetcher(`${BASE_URL}/account?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${sessionId}`)
