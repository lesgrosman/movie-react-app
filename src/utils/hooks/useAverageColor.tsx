import { BASE_IMAGE } from '@utils/constants'
import { FastAverageColor } from 'fast-average-color'
import { Nullable } from '@utils/types'
import { useEffect, useState } from 'react'

const fac = new FastAverageColor()

interface UseAverageColor {
  averageColor: string
}

export const useAverageColor = (url?: Nullable<string>): UseAverageColor => {
  const [averageColor, setAverageColor] = useState('')

  useEffect(() => {
    fac
      .getColorAsync(`${BASE_IMAGE}${url}`)
      .then(res => setAverageColor(res.hex))
      .catch(() => setAverageColor(''))
  }, [url])
  return {
    averageColor,
  }
}
