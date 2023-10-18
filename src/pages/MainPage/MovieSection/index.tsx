import { MovieSectionWithTabs } from '@utils/types'
import { Tab } from '@headlessui/react'
import MovieList from './MovieList'

interface Props {
  section: MovieSectionWithTabs
  innerClassName?: string
}

const MovieSection = ({ section, innerClassName = '' }: Props) => {
  return (
    <div className='w-full px-2 pb-2 pt-16 sm:px-0 items-center gap-10'>
      <Tab.Group>
        <div className='flex md:flex-row flex-col md:items-center gap-5'>
          <h2 className='mb-0 font-montserratAlt'>{section.title}</h2>
          <Tab.List
            className={`flex space-x-1 rounded-3xl p-0.5 border-[1px] border-black ${innerClassName}`}
          >
            {section.tabs.map(({ id, title }) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  `w-full rounded-3xl py-1 text-sm font-semibold focus:outline-none ${
                    selected ? 'bg-primary-default' : 'hover:bg-white/[0.12]'
                  }`
                }
              >
                {title}
              </Tab>
            ))}
          </Tab.List>
        </div>

        <Tab.Panels>
          {section.tabs.map(({ id, url, queryKey }) => (
            <Tab.Panel key={id}>
              <MovieList url={url} queryKey={queryKey} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default MovieSection
