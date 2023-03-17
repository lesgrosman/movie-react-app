import Header from '@components/Header'

interface Props {
  hero: React.ReactNode
  children: React.ReactNode
}

const ProfileLayout = ({ hero, children }: Props) => {
  return (
    <div className='mb-20'>
      <Header />
      <div className='mt-20 w-full h-[220px] mb-4'>{hero}</div>
      <div className='max-w-7xl m-auto min-h-screen'>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default ProfileLayout
