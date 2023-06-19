import { AccountState, QueryType } from '@utils/types'
import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/solid'
import { addToWatchList, markAsFavorite } from '@pages/DetailPage/mutations'
import { fetchAccountState } from '@pages/DetailPage/queries'
import { showNofication } from '@utils/helper'
import { useAuthContext } from 'context/useAuthContext'
import { useMutation, useQuery } from '@tanstack/react-query'

interface Props {
  type: 'movie' | 'tv'
  id: number
  refetchList: () => void
}

const ActionButtons = ({ type, id, refetchList }: Props) => {
  const { session, accountId } = useAuthContext()

  const { data, refetch: refetchAccount }: QueryType<AccountState> = useQuery(
    [`${type}-account-state`, id],
    () => fetchAccountState(type, session, `${id}`),
    { enabled: !!session }
  )

  const { mutate: markAsFavoriteMutation, isLoading: markAsFavoriteLoading } = useMutation({
    mutationKey: [`favorite-${type}`, id],
    mutationFn: () =>
      markAsFavorite(accountId, session, {
        media_id: Number(id),
        media_type: type,
        favorite: !data?.favorite,
      }),
    onSuccess: () => {
      refetchList()
      refetchAccount()
      showNofication(data?.favorite ? 'Removed from favorite' : 'Mark as favorite', 'success')
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
      refetchList()
      refetchAccount()
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
        className={`w-9 h-9 border-[1px] ${
          data?.favorite ? 'bg-pink-500 border-pink-500' : ''
        } rounded-full justify-center items-center outline-none`}
        onClick={handleMarkAsFavorite}
      >
        <HeartIcon
          className={`w-4 h-4 mx-auto ${data?.favorite ? 'text-white' : 'text-gray-400'}`}
        />
      </button>
      <button
        disabled={addToWatchListLoading || !session}
        className={`w-9 h-9 border-[1px] ${
          data?.watchlist ? 'bg-red-500 border-red-500' : ''
        } rounded-full justify-center items-center outline-none`}
        onClick={handleAddToWatchList}
      >
        <BookmarkIcon
          className={`w-4 h-4 mx-auto ${data?.watchlist ? 'text-white' : 'text-gray-400'}`}
        />
      </button>
    </div>
  )
}

export default ActionButtons
