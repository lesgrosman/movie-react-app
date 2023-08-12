import { BASE_URL } from 'utils/constants'
import { LoginForm } from '../../pages/LoginPage/utils'
import { fetcher } from 'helpers/api.helpers'
import { useAuthContext } from 'context/useAuthContext'
import { useState } from 'react'

type CreateSessionIdResponse = {
  success: boolean
  session_id: string
}

type CreateRequestTokenResponse = {
  success: boolean
  expires_at: string
  request_token: string
}

type UseAuth = {
  login: (params: LoginForm) => Promise<void>
  logout: () => Promise<void>
  isLoading: boolean
  error: string
}

export const useAuth = (): UseAuth => {
  const { setSession, setAccountId } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const login = async ({ username, password }: LoginForm) => {
    setIsLoading(true)
    if (error) {
      setError('')
    }

    try {
      const createRequestTokenResponse = await fetcher<CreateRequestTokenResponse>(
        `${BASE_URL}/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_DB_API}`
      )

      if (!createRequestTokenResponse || !createRequestTokenResponse.request_token) {
        throw new Error('Create request token error')
      }

      const { request_token } = createRequestTokenResponse

      await fetcher<CreateRequestTokenResponse>(
        `${BASE_URL}/authentication/token/validate_with_login?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
        {
          method: 'POST',
          body: JSON.stringify({
            username,
            password,
            request_token,
          }),
        }
      )

      const createSessionId = await fetcher<CreateSessionIdResponse>(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
        {
          method: 'POST',
          body: JSON.stringify({ request_token }),
        }
      )

      const accountResponse = await fetcher<{ id: number }>(
        `${BASE_URL}/account?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${createSessionId.session_id}`
      )

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('session_id', createSessionId.session_id)
        window.localStorage.setItem('account_id', `${accountResponse.id}`)
      }
      setSession(createSessionId.session_id)
      setAccountId(`${accountResponse.id}`)
      setIsLoading(false)
      setError('')
    } catch (err) {
      setIsLoading(false)
      setError('Invalid username or password. Please provide a valid credentials.')
    }
  }

  const logout = async () => {
    try {
      const sessionId = window.localStorage.getItem('session_id')

      const deleteSession = await fetcher<{ success: boolean }>(
        `${BASE_URL}/authentication/session?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
        {
          method: 'DELETE',
          body: JSON.stringify({
            session_id: sessionId,
          }),
        }
      )

      if (!deleteSession.success) {
        throw new Error('Something went wrong')
      }
      window.localStorage.removeItem('session_id')
      setSession('')
      setAccountId('')
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  return {
    login,
    logout,
    isLoading,
    error,
  }
}
