import { BookmarkIcon, HeartIcon } from '@heroicons/react/24/solid'
import { MovieOrTv } from '@utils/types'
import { addToWatchList, markAsFavorite, rate, removeRating } from '@pages/DetailPage/mutations'
import { getAccountStateData } from '@pages/DetailPage/queries'
import { showNofication } from '@utils/helper'
import { useAuthContext } from 'context/useAuthContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import StarRating from './Rating'

interface Props {
  type: MovieOrTv
}

const ActionButtons = ({ type }: Props) => {
  const router = useRouter()
  const { id } = router.query
  const { session, accountId } = useAuthContext()
  const queryClient = useQueryClient()

  const { data } = getAccountStateData({ type, id: id as string, session })

  const { mutate: markAsFavoriteMutation, isLoading: markAsFavoriteLoading } = useMutation({
    mutationKey: [`${type}-account-state`, id],
    mutationFn: () =>
      markAsFavorite(accountId, session, {
        media_id: Number(id),
        media_type: type,
        favorite: !data?.favorite,
      }),
    onSuccess: () => {
      queryClient.setQueryData([`${type}-account-state`, id], (oldData: any) => {
        return {
          ...oldData,
          favorite: !data?.favorite,
        }
      })
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
      queryClient.setQueryData([`${type}-account-state`, id], (oldData: any) => {
        return {
          ...oldData,
          watchlist: !data?.watchlist,
        }
      })
      showNofication(data?.watchlist ? 'Removed from watchlist' : 'Added to watchlist', 'success')
    },
    onError: () => showNofication('Something went wrong', 'error'),
  })

  const { mutate: rateMutation } = useMutation({
    mutationKey: [`${type}-account-state`, id],
    mutationFn: (value: number) => rate(session, type, id as string, value),
    onSuccess: (data, variables) => {
      queryClient.setQueryData([`${type}-account-state`, id], (oldData: any) => {
        return {
          ...oldData,
          rated: {
            value: variables,
          },
          watchlist: false,
        }
      })
      showNofication(`You have rated the ${type}`, 'success')
    },
    onError: () => showNofication('Something went wrong', 'error'),
  })

  const { mutate: removeRatingMutation } = useMutation({
    mutationKey: [`${type}-account-state`, id],
    mutationFn: () => removeRating(session, type, id as string),
    onSuccess: () => {
      queryClient.setQueryData([`${type}-account-state`, id], (oldData: any) => {
        return {
          ...oldData,
          rated: {
            value: false,
          },
        }
      })
      showNofication(`You have removed ${type} rating`, 'success')
    },
    onError: () => showNofication('Something went wrong', 'error'),
  })

  const handleMarkAsFavorite = () => markAsFavoriteMutation()

  const handleAddToWatchList = () => addToWatchListMutation()

  const handleRate = (value: number) => rateMutation(value)

  const handleRemoveRating = () => removeRatingMutation()

  const initialRating = typeof data?.rated === 'boolean' ? 0 : data?.rated.value

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
      <StarRating rating={initialRating ?? 0} rate={handleRate} removeRating={handleRemoveRating} />
    </div>
  )
}

export default ActionButtons
