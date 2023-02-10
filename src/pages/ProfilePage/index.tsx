import { useAuthContext } from 'context/useAuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '@components/Container'
import ProfileHero from './Hero'

const ProfilePage = () => {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user])

  return (
    <Container>
      <ProfileHero />
    </Container>
  )
}

export default ProfilePage
