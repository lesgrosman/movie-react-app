import { useStyles } from '../styles'
import Typography from '@material-ui/core/Typography'

type Props = {
  title: string
  content?: string
}

const Annotation = ({ title = '', content = '' }: Props) => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.bottomTitle} variant='h5'>
        {title}
      </Typography>
      <Typography variant='body1'>{content}</Typography>
    </>
  )
}

export default Annotation
