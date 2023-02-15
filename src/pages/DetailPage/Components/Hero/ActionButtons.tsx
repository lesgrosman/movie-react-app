import { AccountState, QueryType } from '@utils/types'
import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/solid'
import { addToWatchList, markAsFavorite } from '@pages/DetailPage/mutations'
import { fetchAccountState } from '@pages/DetailPage/queries'
import { showNofication } from '@utils/helper'
import { useAuthContext } from 'context/useAuthContext'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

interface Props {
  type: 'movie' | 'tv'
}

const ActionButtons = ({ type }: Props) => {
  const router = useRouter()
  const { id } = router.query
  const { session, accountId } = useAuthContext()

  const { data, refetch }: QueryType<AccountState> = useQuery(
    [`${type}-account-state`, id],
    () => fetchAccountState(id as string, type, session),
    { enabled: !!session }
  )

  const { mutate: markAsFavoriteMutation, isLoading: markAsFavoriteLoading } = useMutation({
    mutationKey: [`${type}-account-state`, id],
    mutationFn: () =>
      markAsFavorite(accountId, session, {
        media_id: Number(id),
        media_type: type,
        favorite: !data?.favorite,
      }),
    onSuccess: () => {
      refetch(),
        showNofication(data?.favorite ? 'Removed from favorite' : 'Marked as favorite!', 'success')
    },
    onError: () => showNofication('Something went wrong', 'error'),
  })

  const { mutate: addToWatchListMutation, isLoading: addToWatchListLoading } = useMutation({
    mutationKey: [`${type}-account-state`, id],
    mutationFn: () =>
      addToWatchList(accountId, session, {
        media_id: Number(id),
        media_type: type,
        watchlist: !data?.watchlist,
      }),
    onSuccess: () => {
      refetch(),
        showNofication(data?.watchlist ? 'Removed from watchlist' : 'Added to watchlist', 'success')
    },
    onError: () => showNofication('Something went wrong', 'error'),
  })

  const handleMarkAsFavorite = () => markAsFavoriteMutation()

  const handleAddToWatchList = () => addToWatchListMutation()

  return (
    <div className='flex gap-5'>
      <button
        disabled={markAsFavoriteLoading || !session}
        className='w-11 h-11 bg-cyan-900 rounded-full justify-center items-center outline-none'
        onClick={handleMarkAsFavorite}
      >
        <HeartIcon className={`w-4 h-4 mx-auto ${data?.favorite ? 'text-pink-500' : ''}`} />
      </button>
      <button
        disabled={addToWatchListLoading || !session}
        className='w-11 h-11 bg-cyan-900 rounded-full justify-center items-center outline-none'
        onClick={handleAddToWatchList}
      >
        <BookmarkIcon className={`w-4 h-4 mx-auto ${data?.watchlist ? 'text-red-500' : ''}`} />
      </button>
    </div>
  )
}

export default ActionButtons
