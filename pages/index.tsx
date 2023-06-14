import { NextApiResponse } from 'next'
import Main from '@pages/MainPage'

const MainPage = () => {
  return <Main />
}

export default MainPage

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  res.setHeader('Content-Security-Policy', "frame-ancestors 'none'")
  return {
    props: {},
  }
}
