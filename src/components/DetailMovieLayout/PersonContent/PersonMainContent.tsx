import { Divider, Grid, Typography } from '@material-ui/core'
import { MovieItem } from 'utils/types'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'
import AboutTable from '../AboutTable'

const useStyles = makeStyles({
  rootTop: {
    paddingTop: '100px',
    display: 'flex',
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    borderRadius: '10px',
    width: '185px',
    height: '278px',
  },
  divider: {
    marginLeft: '30px',
    height: '100%',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
  },
  bold: {
    fontWeight: 500,
  },
  right: {
    paddingLeft: '50px',
  },
  cast: {
    marginTop: '30px',
  },
  choice: {
    cursor: 'pointer',
    '&:hover': {
      color: '#4895ef',
    },
  },
})

interface Props {
  person: any
  type: any
}

const PersonMainContent = ({ person, type }: Props) => {
  const { name, poster, movies } = person
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Grid className={classes.rootTop} item container>
      <Grid className={classes.left} item md={3}>
        <img className={classes.image} src={poster} alt='img' />
        <Divider className={classes.divider} orientation='vertical' light flexItem />
      </Grid>
      <Grid item md={6}>
        <div className={classes.about}>
          <Typography variant='h4'>{name}</Typography>
          {/* <AboutTable data={person} type={type} /> */}
        </div>
      </Grid>
      <Grid className={classes.right} item md={3}>
        <Typography className={classes.cast} variant='h6'>
          Movies:
        </Typography>
        {movies.slice(0, 11).map((item: MovieItem, i: number) => {
          return (
            <Typography
              key={i}
              className={classes.choice}
              onClick={() => navigate(`/${item.itemType}/${item.id}`)}
            >
              {item.title}
            </Typography>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default PersonMainContent
