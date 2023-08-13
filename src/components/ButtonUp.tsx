import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

const ButtonUp = ({ isVisible }: { isVisible: boolean }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button className='fixed bottom-3 right-3' onClick={handleScrollToTop}>
      <ArrowUpCircleIcon className='w-14 h-14 text-emerald-400' />
    </button>
  )
}

export default ButtonUp
