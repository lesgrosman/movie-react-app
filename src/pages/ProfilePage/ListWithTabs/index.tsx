import { Group } from '../types'
import { Tab } from '@headlessui/react'
import List from './List'

type Tab = {
  id: string
  title: string
  type: 'movies' | 'tv'
}

const tabs: Tab[] = [
  {
    id: '1',
    title: 'Movies',
    type: 'movies',
  },
  {
    id: '2',
    title: 'TV',
    type: 'tv',
  },
]

interface Props {
  group: Group
  title: string
}

const ListWithTabs = ({ group, title }: Props) => {
  return (
    <div className='flex flex-col px-10'>
      <Tab.Group>
        <div className='flex items-center gap-5'>
          <h2>{title}</h2>
          <Tab.List className='flex gap-5'>
            {tabs.map(({ id, title }) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  `w-full outline-none ${selected ? 'text-primary-light' : `text-gray-500`}`
                }
              >
                <h3>{title}</h3>
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {tabs.map(({ id, type }) => (
            <Tab.Panel key={id}>
              <List type={type} group={group} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ListWithTabs
