import { Tab } from '@headlessui/react'
import { TabWithItems } from '../types'
import Card from './Card'

interface Props {
  tabs: TabWithItems[]
}

const CreditsSection = ({ tabs }: Props) => {
  const filteredTabs = tabs.filter(tab => tab.itemsCount)

  return (
    <div>
      <h3>Credits</h3>
      <Tab.Group>
        <Tab.List className='w-full flex mb-4'>
          {filteredTabs.map(({ id, title, itemsCount }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                `flex justify-start w-full py-2.5 text-sm font-medium leading-5 text-slate-400 outline-none ${
                  selected ? 'border-b-[2px] border-primary-light text-black' : ''
                }`
              }
            >
              <div className='text-start'>
                <h3 className='mb-0 sm:text-xl text-xs'>{title}</h3>
                <span className='sm:text-sm text-xs'>{itemsCount} items</span>
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {filteredTabs.map(({ id, items }) => (
            <Tab.Panel key={id}>
              {items.map(item => {
                return <Card key={item.id} item={item} />
              })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default CreditsSection
