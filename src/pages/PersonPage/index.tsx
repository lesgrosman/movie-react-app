import { QueryKeys } from '@utils/constants'
import { getPersonCredits, getPersonDetail } from './helpers'
import { useMemo } from 'react'
import { useQueries } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import BioSection from './BioSection'
import ButtonUp from '@components/ButtonUp'
import CreditsModel from './models'
import CreditsSection from './CreditsSection'
import InfoSection from './InfoSection'
import useShowUpButton from '@utils/hooks/useShowUpButton'

const PersonPage = () => {
  const router = useRouter()

  const { id } = router.query

  const personId = id as string

  const allDataResponse = useQueries({
    queries: [
      {
        queryKey: [`${QueryKeys.PERSON_DETAIL}`, personId],
        queryFn: () => getPersonDetail(personId),
      },
      {
        queryKey: [`${QueryKeys.PERSON_CREDITS}`, id],
        queryFn: () => getPersonCredits(personId),
      },
    ],
  })

  const creditsTabs = useMemo(() => {
    return CreditsModel.createTabs(allDataResponse[1].data)
  }, [allDataResponse[1]])

  const { showUpButton } = useShowUpButton()

  if (
    (allDataResponse[0].isLoading || allDataResponse[1].isLoading) &&
    (!allDataResponse[0].data || !allDataResponse[1].data)
  )
    return <>Loading...</>

  if (
    allDataResponse[0].error ||
    allDataResponse[1].error ||
    !allDataResponse[0].data ||
    !allDataResponse[1].data
  )
    return <>No Person found</>

  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-3'>
        <InfoSection detail={allDataResponse[0].data} />
      </div>
      <div className='col-span-9 flex flex-col gap-4'>
        <BioSection
          name={allDataResponse[0].data.name}
          biography={allDataResponse[0].data.biography}
        />
        <CreditsSection tabs={creditsTabs} />
      </div>
      <ButtonUp isVisible={showUpButton} />
    </div>
  )
}

export default PersonPage
