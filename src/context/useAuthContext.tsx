import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

interface AuthContext {
  session: string
  accountId: string
  setSession: Dispatch<SetStateAction<string>>
  setAccountId: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<string>('')
  const [accountId, setAccountId] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionId = window.localStorage.getItem('session_id')
      const accountId = window.localStorage.getItem('account_id')
      setSession(sessionId || '')
      setAccountId(accountId || '')
    }
  }, [session, accountId])

  return (
    <AuthContext.Provider value={{ session, accountId, setSession, setAccountId }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
