import { SimpleItem } from 'utils/types'

type Props = {
  title: string
  list: SimpleItem[]
  // redirectType?: 'movie' | 'person' | 'tv'
  rankAverage?: number
  rankCount?: number
}

const RightSideList = ({ title, list, rankAverage, rankCount }: Props) => {
  return (
    <>
      <div className='flex items-end mb-10'>
        {rankAverage ? (
          <h1
            className={`mb-0 mr-2 ${
              rankAverage >= 7
                ? 'text-green-500'
                : rankAverage >= 5
                ? 'text-gray-400'
                : 'text-red-500'
            }`}
          >
            {rankAverage}
          </h1>
        ) : (
          '-'
        )}
        {rankCount ? <h4>{rankCount}</h4> : '-'}
      </div>

      <h3>{title}</h3>
      <div className='flex flex-col gap-1'>
        {list?.slice(0, 10).map(item => (
          <span key={item.id}>{item.name}</span>
        ))}
      </div>
    </>
  )
}

export default RightSideList
