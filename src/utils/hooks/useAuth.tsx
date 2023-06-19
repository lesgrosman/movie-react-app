import { BASE_URL } from 'utils/constants'
import { LoginForm } from '../../pages/LoginPage/utils'
import { useAuthContext } from 'context/useAuthContext'
import { useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

type CreateSessionIdVariables = {
  request_token: string
}

type CreateSessionIdResponse = {
  success: boolean
  session_id: string
}

type CreateSessionWithLoginVariables = {
  username: string
  password: string
  request_token: string
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
}

export const useAuth = (): UseAuth => {
  const { setSession, setAccountId } = useAuthContext()
  const [isLoading, setIsLoading] = useState(false)

  const login = async ({ username, password }: LoginForm) => {
    setIsLoading(true)

    try {
      const createRequestTokenResponse = await axios.get<CreateRequestTokenResponse>(
        `${BASE_URL}/authentication/token/new?api_key=${process.env.NEXT_PUBLIC_DB_API}`
      )

      if (!createRequestTokenResponse.data || !createRequestTokenResponse.data.request_token) {
        throw new Error('Create request token error')
      }

      const { request_token } = createRequestTokenResponse.data

      const createSessionWithLogin = await axios.post<
        CreateSessionWithLoginVariables,
        AxiosResponse<CreateRequestTokenResponse>
      >(
        `${BASE_URL}/authentication/token/validate_with_login?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
        {
          username,
          password,
          request_token,
        }
      )

      if (!createSessionWithLogin.data || !createSessionWithLogin.data.request_token) {
        throw new Error('Create session with login error')
      }

      const createSessionId = await axios.post<
        CreateSessionIdVariables,
        AxiosResponse<CreateSessionIdResponse>
      >(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.NEXT_PUBLIC_DB_API}`,
        { request_token }
      )

      if (!createSessionId.data || !createSessionId.data.session_id) {
        throw new Error('Create session ID error')
      }

      const accountResponse = await axios.get<{ id: number }>(
        `${BASE_URL}/account?api_key=${process.env.NEXT_PUBLIC_DB_API}&session_id=${createSessionId.data.session_id}`
      )

      if (!accountResponse.data || !accountResponse.data.id) {
        throw new Error('GEt account id error')
      }

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('session_id', createSessionId.data.session_id)
        window.localStorage.setItem('account_id', `${accountResponse.data.id}`)
      }
      setSession(createSessionId.data.session_id)
      setAccountId(`${accountResponse.data.id}`)
      setIsLoading(false)
    } catch (error) {
      const err = error as AxiosError<{ status_code: number; status_message: string }>
      setIsLoading(false)
      throw new Error(err.response?.data?.status_message)
    }
  }

  const logout = async () => {
    try {
      const sessionId = window.localStorage.getItem('session_id')
      const deleteSession = await axios.delete<
        { session_id: string },
        AxiosResponse<{ success: boolean }>
      >(`${BASE_URL}/authentication/session?api_key=${process.env.NEXT_PUBLIC_DB_API}`, {
        data: {
          session_id: sessionId,
        },
      })

      if (!deleteSession.data?.success) {
        throw new Error('Something went wrong')
      }
      window.localStorage.removeItem('session_id')
      setSession('')
      setAccountId('')
    } catch (error) {
      const err = error as AxiosError<{ status_code: number; status_message: string }>
      throw new Error(err.response?.data?.status_message)
    }
  }

  return {
    login,
    logout,
    isLoading,
  }
}
