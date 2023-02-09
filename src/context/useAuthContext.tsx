import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

interface AuthContext {
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const sessionId = window.localStorage.getItem('session_id')
    setUser(sessionId || '')
  }, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
