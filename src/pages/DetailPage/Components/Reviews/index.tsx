import { ReviewTab } from './types'
import { Reviews } from '@utils/types'
import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Card from './Card'

interface Props {
  data?: Reviews
}

const Reviews = ({ data }: Props) => {
  const [tabs, setTabs] = useState<ReviewTab[]>([])

  useEffect(() => {
    if (data && data?.results?.length !== 0) {
      setTabs([
        {
          id: '1',
          title: 'All',
          reviews: data.results,
          count: data.results.length,
        },
        {
          id: '2',
          title: 'Positive',
          reviews: data.results.filter(
            review => review.author_details.rating && review?.author_details?.rating >= 7
          ),
          count: data.results.filter(
            review => review.author_details.rating && review?.author_details?.rating >= 7
          ).length,
        },
        {
          id: '3',
          title: 'Negative',
          reviews: data.results.filter(
            review => review.author_details.rating && review?.author_details?.rating < 5
          ),
          count: data.results.filter(
            review => review.author_details.rating && review?.author_details?.rating < 5
          ).length,
        },
      ])
    }
  }, [data])

  if (tabs.length === 0) return null

  return (
    <div className='flex flex-col px-2'>
      <Tab.Group>
        <div className='flex sm:flex-row flex-col items-start gap-5'>
          <h2 className='mb-0 text-start'>Reviews</h2>
          <Tab.List className='flex gap-5'>
            {tabs.map(({ id, title, count }) => (
              <Tab
                key={id}
                disabled={!count}
                className={({ selected }) =>
                  `w-full outline-none ${
                    selected
                      ? 'text-primary-light'
                      : `text-gray-500 ${count && 'hover:text-primary-light'}`
                  }`
                }
              >
                <div className='flex gap-2'>
                  <h3>{title}</h3>
                  <span className='text-sm'>{count}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {tabs.map(({ id, reviews }) => (
            <Tab.Panel key={id}>
              <div className='flex flex-col gap-8'>
                {reviews?.map(review => (
                  <Card key={review.id} review={review} />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Reviews
