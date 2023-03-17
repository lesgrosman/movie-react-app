import { useAuthContext } from 'context/useAuthContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import GroupTabs from './GroupTabs'
import ProfileHero from './Hero'
import ProfileLayout from '@components/Layout/ProfileLayout'
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
    <ProfileLayout hero={<ProfileHero />}>
      <Statistics />
      <GroupTabs />
    </ProfileLayout>
  )
}

export default ProfilePage
