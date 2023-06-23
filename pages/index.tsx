import { NextApiResponse } from 'next'
import Main from '@pages/MainPage'
import NextHead from '@components/NextHead'

const MainPage = () => {
  return (
    <>
      <NextHead />
      <Main />
    </>
  )
}

export default MainPage

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  res.setHeader('Content-Security-Policy', "frame-ancestors 'none'")
  return {
    props: {},
  }
}
