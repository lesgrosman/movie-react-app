import { Group } from '../types'
import { Tab } from '@headlessui/react'
import ListWithTabs from '../ListWithTabs'

type Tab = {
  id: string
  title: string
  group: Group
}

const tabs: Tab[] = [
  {
    id: '2',
    title: 'My ratings',
    group: 'rated',
  },
  {
    id: '3',
    title: 'My favorites',
    group: 'favorite',
  },
  {
    id: '4',
    title: 'My watchlist',
    group: 'watchlist',
  },
]

const GroupTabs = () => {
  return (
    <div className='grid grid-cols-12 gap-4'>
      <Tab.Group>
        <div className='col-span-2'>
          <Tab.List className='w-full flex flex-col justify-start items-start gap-2 border-[1px] rounded-lg p-2'>
            {tabs.map(({ id, title }) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  `w-full outline-none ${selected ? 'text-primary-light' : `text-black`}`
                }
              >
                <h4>{title}</h4>
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels className='col-span-10'>
          {tabs.map(({ id, group, title }) => (
            <Tab.Panel key={id}>
              <ListWithTabs group={group} title={title} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default GroupTabs
