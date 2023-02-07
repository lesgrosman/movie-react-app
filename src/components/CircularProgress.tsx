import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

interface Props {
  value: number
  innerClassName?: string
  size?: string
}

const CircularProgress = ({ value, innerClassName = '', size = 'w-11 h-11' }: Props) => {
  const percentage = Math.ceil(value * 10)
  const [pathColor, trailColor] =
    value >= 7
      ? ['#21d07a', '#20452a']
      : value < 5
      ? ['#db2360', '#571435']
      : ['#d3d530', '#423d0f']

  return (
    <div className={`${innerClassName} ${size}`}>
      <CircularProgressbar
        background
        backgroundPadding={4}
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          backgroundColor: '#000',
          textColor: '#fff',
          pathColor,
          trailColor,
          textSize: '1.75rem',
        })}
      />
    </div>
  )
}

export default CircularProgress
