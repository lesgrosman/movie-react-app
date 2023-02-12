import { useAuthContext } from 'context/useAuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '@components/Container'
import GroupTabs from './GroupTabs'
import ProfileHero from './Hero'
import Statistics from './Statistics'

const ProfilePage = () => {
  const { session } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [session])

  return (
    <Container>
      <ProfileHero />
      <Statistics />
      <GroupTabs />
    </Container>
  )
}

export default ProfilePage
