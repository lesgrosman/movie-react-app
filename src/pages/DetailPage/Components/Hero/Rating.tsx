import { Popover, Transition } from '@headlessui/react'
import { Rating } from 'react-simple-star-rating'
import { StarIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useAuthContext } from 'context/useAuthContext'
import React, { Fragment } from 'react'

interface Props {
  rating: number
  rate: (value: number) => void
  removeRating: () => void
}

const StarRating = ({ rating, rate, removeRating }: Props) => {
  const handleRating = (newRating: number) => rate(newRating * 2)
  const { session } = useAuthContext()

  return (
    <Popover className='relative'>
      <Popover.Button
        disabled={!session}
        className='w-11 h-11 bg-black rounded-full justify-center items-center outline-none'
      >
        <StarIcon className={`w-4 h-4 mx-auto ${rating ? 'text-primary-dark' : 'text-white'}`} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute left-1/2 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl'>
          {({ close }) => (
            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='relative bg-secondary-light p-2 flex items-center gap-2'>
                <button
                  onClick={
                    rating
                      ? () => {
                          close()
                          removeRating()
                        }
                      : undefined
                  }
                >
                  <TrashIcon
                    className={`w-6 h-6 mx-auto ${
                      rating ? 'cursor-pointer text-primary-dark' : 'text-gray-400 cursor-auto'
                    }`}
                  />
                </button>

                <Rating
                  onClick={(rate: number) => {
                    handleRating(rate)
                    close()
                  }}
                  emptyStyle={{ display: 'flex' }}
                  fillStyle={{ display: '-webkit-inline-box' }}
                  allowFraction
                  initialValue={rating / 2}
                />
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default StarRating
