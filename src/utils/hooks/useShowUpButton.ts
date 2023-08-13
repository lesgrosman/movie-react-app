import { useEffect, useState } from 'react'

const useShowUpButton = () => {
  const [showUpButton, setShowUpButton] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowUpButton(true)
    } else {
      setShowUpButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    showUpButton,
  }
}

export default useShowUpButton
