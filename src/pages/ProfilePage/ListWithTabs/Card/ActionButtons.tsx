import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/solid'
import { MovieOrTv } from '@utils/types'
import { getAccountStateData } from '@pages/DetailPage/queries'
import { showNofication } from '@utils/helper'
import { useAddToWatchlist, useMarkAsFavorite } from '@pages/DetailPage/mutations'
import { useAuthContext } from 'context/useAuthContext'

interface Props {
  type: MovieOrTv
  id: number
  refetchList: () => void
}

const ActionButtons = ({ type, id, refetchList }: Props) => {
  const { session, accountId } = useAuthContext()

  const { data, refetch: refetchAccount } = getAccountStateData({ type, id: `${id}`, session })

  const { mutate: markAsFavoriteMutation, isLoading: markAsFavoriteLoading } = useMarkAsFavorite({
    media_id: Number(id),
    media_type: type,
    favorite: !data?.favorite,
  })

  const { mutate: addToWatchlistMutation, isLoading: addToWatchListLoading } = useAddToWatchlist({
    media_id: Number(id),
    media_type: type,
    watchlist: !data?.watchlist,
  })

  const handleMarkAsFavorite = () =>
    markAsFavoriteMutation(
      {
        session,
        accountId,
        body: {
          media_id: Number(id),
          media_type: type,
          favorite: !data?.favorite,
        },
      },
      {
        onSuccess: () => {
          refetchList()
          refetchAccount()
          showNofication(data?.favorite ? 'Removed from favorite' : 'Mark as favorite', 'success')
        },
        onError: () => showNofication('Something went wrong', 'error'),
      }
    )

  const handleAddToWatchList = () =>
    addToWatchlistMutation(
      {
        session,
        accountId,
        body: {
          media_id: Number(id),
          media_type: type,
          watchlist: !data?.watchlist,
        },
      },
      {
        onSuccess: () => {
          refetchList()
          refetchAccount()
          showNofication(
            data?.watchlist ? 'Removed from watchlist' : 'Added to watchlist',
            'success'
          )
        },
        onError: () => showNofication('Something went wrong', 'error'),
      }
    )

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
