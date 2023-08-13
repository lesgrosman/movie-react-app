import { CastMedia, Credits, CrewMedia, Department, MediaItem, TabWithItems } from './types'
import { format, parseISO } from 'date-fns'

const createMediaItem = (inputData: CastMedia | CrewMedia): MediaItem => ({
  id: inputData.id,
  title: 'title' in inputData ? inputData.title ?? '-' : inputData.name ?? '-',
  mediaType: inputData.media_type,
  poster: inputData.poster_path,
  vote: inputData.vote_average,
  voteCount: inputData.vote_count,
  release:
    'release_date' in inputData ? inputData.release_date ?? '' : inputData.first_air_date ?? '',
  character: 'character' in inputData ? inputData.character : null,
})

const sortItems = (
  inputItems?: CastMedia[] | CrewMedia[],
  department?: Department
): MediaItem[] => {
  let items: CastMedia[] | CrewMedia[] = []
  if (department) {
    items = ((inputItems as CrewMedia[]) ?? []).filter(item => item.department === department)
  } else {
    items = inputItems as CastMedia[]
  }

  const seenIds = new Set()

  return (items ?? [])
    .map(item => createMediaItem(item))
    .sort((a, b) => {
      if (!a.release) return -1
      if (!b.release) return 1
      return parseISO(b.release).getTime() - parseISO(a.release).getTime()
    })
    .map(sortedItem => ({
      ...sortedItem,
      release: sortedItem.release ? format(parseISO(sortedItem.release), 'yyyy') : 'Upcoming',
    }))
    .filter(item => {
      if (!seenIds.has(item.id)) {
        seenIds.add(item.id)
        return true
      }
      return false
    })
}

const createTabs = (inputData?: Credits): TabWithItems[] => [
  {
    id: Department.CAST,
    title: Department.CAST,
    items: sortItems(inputData?.cast),
    itemsCount: (inputData?.cast ?? []).length,
  },
  {
    id: Department.DIRECTING,
    title: Department.DIRECTING,
    items: sortItems(inputData?.crew, Department.DIRECTING),
    itemsCount: (inputData?.crew ?? []).filter(item => item.department === Department.DIRECTING)
      .length,
  },
  {
    id: Department.PRODUCTION,
    title: Department.PRODUCTION,
    items: sortItems(inputData?.crew, Department.PRODUCTION),
    itemsCount: (inputData?.crew ?? []).filter(item => item.department === Department.PRODUCTION)
      .length,
  },
  {
    id: Department.WRITING,
    title: Department.WRITING,
    items: sortItems(inputData?.crew, Department.WRITING),
    itemsCount: (inputData?.crew ?? []).filter(item => item.department === Department.WRITING)
      .length,
  },
  {
    id: Department.CAMERA,
    title: Department.CAMERA,
    items: sortItems(inputData?.crew, Department.CAMERA),
    itemsCount: (inputData?.crew ?? []).filter(item => item.department === Department.CAMERA)
      .length,
  },
]

const CreditsModel = { createTabs }
export default CreditsModel
