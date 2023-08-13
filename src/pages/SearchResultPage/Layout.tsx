import { Results, SearchType } from './types'
import { Tab } from '@headlessui/react'
import MovieList from './MovieList/MovieList'
import PersonList from './PersonList/PersonList'

interface Tab {
  title: string
  itemsCount: number
  type: SearchType
  totalPages: number
}

interface Props {
  movieResults: Results
  tvResutls: Results
  personResults: Results
  param: string
}

const Layout = ({ movieResults, tvResutls, param, personResults }: Props) => {
  const tabs: Tab[] = [
    {
      title: 'Movies',
      itemsCount: movieResults.total_results,
      type: 'movie',
      totalPages: movieResults.total_pages,
    },
    {
      title: 'TV Series',
      itemsCount: tvResutls.total_results,
      totalPages: tvResutls.total_pages,
      type: 'tv',
    },
  ]

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <div className='grid grid-cols-12 gap-4'>
      <Tab.Group>
        <div className='col-span-3'>
          <Tab.List className='sticky top-32 w-full flex flex-col justify-start items-start gap-2 border-[1px] rounded-lg'>
            <div className='bg-emerald-400 w-full h-16 flex items-center justify-center rounded-t-lg'>
              <h3 className='text-white mb-0'>Search Results</h3>
            </div>
            <div className='w-full'>
              {tabs.map(({ type, title, itemsCount }) => (
                <Tab
                  key={type}
                  className={({ selected }) =>
                    `w-full outline-none ${selected ? 'text-emerald-400' : `text-black`}`
                  }
                  onClick={handleScrollToTop}
                >
                  {({ selected }) => (
                    <div
                      className={`${
                        selected ? 'bg-slate-100' : 'hover:bg-slate-100'
                      } cursor-pointer`}
                    >
                      <div className='flex justify-between p-3'>
                        <h4>{title}</h4>
                        <span>{itemsCount}</span>
                      </div>
                    </div>
                  )}
                </Tab>
              ))}
              <Tab
                key='person'
                className={({ selected }) =>
                  `w-full outline-none ${selected ? 'text-emerald-400' : `text-black`}`
                }
                onClick={handleScrollToTop}
              >
                {({ selected }) => (
                  <div
                    className={`${selected ? 'bg-slate-100' : 'hover:bg-slate-100'} cursor-pointer`}
                  >
                    <div className='flex justify-between p-3'>
                      <h4>Persons</h4>
                      <span>{personResults.total_results}</span>
                    </div>
                  </div>
                )}
              </Tab>
            </div>
          </Tab.List>
        </div>
        <Tab.Panels className='col-span-9'>
          {tabs.map(({ type, totalPages }) => (
            <Tab.Panel key={type}>
              <MovieList type={type} param={param} totalPages={totalPages} />
            </Tab.Panel>
          ))}
          <Tab.Panel key='person'>
            {/* <List type={type} param={param} totalPages={totalPages} /> */}
            <PersonList param={param} totalPages={personResults.total_pages} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Layout
