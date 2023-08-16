import Header from '@components/Header'

interface Props {
  hero?: React.ReactNode
  children: React.ReactNode
}

const DetailLayout = ({ hero, children }: Props) => {
  return (
    <div className='mb-20'>
      <Header />
      <div className='mt-20 w-full mb-4'>{hero}</div>
      <div className='max-w-7xl m-auto min-h-screen'>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DetailLayout
