import { useEffect, useState } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const useWindowSize = (breakpoint: Breakpoint) => {
  const [isSmall, setIsSmall] = useState<boolean | undefined>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsSmall(window.innerWidth <= breakpoints[breakpoint])
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [breakpoint])

  return isSmall
}

export default useWindowSize
