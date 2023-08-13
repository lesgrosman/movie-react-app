import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query'
import { useEffect } from 'react'

interface Props<T> {
  hasNextPage?: boolean
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<T, unknown>>
}

const useInfiniteScroll = <T>({ hasNextPage, fetchNextPage }: Props<T>) => {
  useEffect(() => {
    if (hasNextPage) {
      const handleScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollPosition = window.scrollY

        if (scrollPosition + windowHeight >= documentHeight) {
          fetchNextPage()
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [hasNextPage, fetchNextPage])
}

export default useInfiniteScroll
