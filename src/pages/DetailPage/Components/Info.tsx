import { SimpleItem } from '@utils/types'

interface Props {
  status?: string
  originalLanguage?: string
  keyWords?: SimpleItem[]
  children: React.ReactNode
}

const Info = ({ status, originalLanguage, keyWords, children }: Props) => {
  return (
    <div className='md:flex hidden flex-col gap-6 sm:col-span-2 px-4'>
      <h2>Additional Info</h2>
      <div>
        <h4>Status</h4>
        <span>{status}</span>
      </div>
      <div>
        <h4>Original Language</h4>
        <span>{originalLanguage}</span>
      </div>
      {children}
      <div>
        <h4>Keywords</h4>
        <div className='flex flex-wrap gap-2'>
          {keyWords?.map(({ id, name }) => (
            <div key={id} className='bg-slate-300 text-sm p-1.5 rounded-md'>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info
