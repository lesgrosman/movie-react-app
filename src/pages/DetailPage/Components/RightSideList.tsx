import { SimpleItem } from 'utils/types'
import { Typography } from '@material-ui/core'
import { useStyles } from '../styles'

type Props = {
  title: string
  list: SimpleItem[]
  // redirectType?: 'movie' | 'person' | 'tv'
  rankAverage?: number
  rankCount?: number
}

const RightSideList = ({ title, list, rankAverage, rankCount }: Props) => {
  const classes = useStyles()
  return (
    <>
      {rankAverage ? (
        <Typography className={classes.rankTop} variant='h4'>
          {rankAverage}
        </Typography>
      ) : null}
      {rankCount ? (
        <Typography
          style={{
            display: 'inline-block',
            color: 'rgba(255,255,255, .5)',
          }}
          variant='h5'
        >
          {rankCount}
        </Typography>
      ) : null}

      <Typography className={classes.cast} variant='h6'>
        {title}
      </Typography>
      {list?.slice(0, 10).map(item => (
        <Typography key={item.id} gutterBottom>
          {item.name}
        </Typography>
      ))}
    </>
  )
}

export default RightSideList
