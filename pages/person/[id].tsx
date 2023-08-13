import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { QueryKeys } from '@utils/constants'
import { getPersonCredits, getPersonDetail } from '@pages/PersonPage/helpers'
import Container from '@components/Container'
import PersonDetail from '@pages/PersonPage'

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient()

  const personId = context.params?.id as string

  await Promise.all([
    queryClient.prefetchQuery([`${QueryKeys.PERSON_DETAIL}`, personId], () =>
      getPersonDetail(personId)
    ),
    queryClient.prefetchQuery([`${QueryKeys.PERSON_CREDITS}`, personId], () =>
      getPersonCredits(personId)
    ),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const PersonDetailPage = () => (
  <Container>
    <div className='px-3 mt-32'>
      <PersonDetail />
    </div>
  </Container>
)

export default PersonDetailPage
