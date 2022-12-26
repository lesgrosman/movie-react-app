import { MovieSectionWithTabs } from '@utils/types'
import { Tab } from '@headlessui/react'
import MovieList from './MovieList'

interface Props {
  section: MovieSectionWithTabs
  innerClassName?: string
}

const MovieSection = ({ section, innerClassName = '' }: Props) => {
  return (
    <div className='w-full px-2 py-16 sm:px-0 items-center gap-10'>
      <Tab.Group>
        <div className='flex items-center gap-5'>
          <h2 className='mb-0'>{section.title}</h2>
          <Tab.List className={`flex space-x-1 rounded-3xl bg-blue-900/20 p-0.5 ${innerClassName}`}>
            {section.tabs.map(({ id, title }) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  `w-full rounded-3xl py-1 text-sm font-medium leading-5 ring-opacity-60 ring-offset-2  focus:outline-none ${
                    selected
                      ? 'bg-slate-800 text-emerald-400'
                      : 'text-slate-800 hover:bg-white/[0.12] hover:text-emerald-400'
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