import React from 'react'
import { useHistory } from 'react-router-dom'
import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AboutTable from '../AboutTable'

const useStyles = makeStyles({
  rootTop: {
    paddingTop: '100px',
    display: 'flex'
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  image: {
    borderRadius: '10px',
    width: '185px',
    height: '278px'
  },
  divider: {
    marginLeft: '30px',
    height: '100%'
  },
  about: {
    display: 'flex',
    flexDirection: 'column'
  },
  bold: {
    fontWeight: 500
  },
  right: {
    paddingLeft: '50px'
  },
  rank: {
    display: 'inline-block',
    color: rank_average =>rank_average >= 7 ? '#00e676' : rank_average < 5 ? '#c50e29' : '#b0bec5',
    fontWeight: 500,
    marginRight: '10px'
  },
  cast: {
    marginTop: '30px'
  },
  choice: {
    cursor: 'pointer',
    '&:hover': {
      color: '#4895ef'
    }
  }
})


const MovieMainContent = ({ movie }) => {
  const { title, cast, rank_average, rank_count,poster } = movie
  const history = useHistory()
  const classes = useStyles(rank_average)

  return (  
    <Grid className={classes.rootTop} item container>
      <Grid className={classes.left} item md={3}>
        <img className={classes.image} src={poster} alt="img"/>
        <Divider className={classes.divider} orientation="vertical" light flexItem />
      </Grid>
      <Grid item md={6}>
        <div className={classes.about}>
          <Typography variant="h4">{title}</Typography>
          <AboutTable data={movie}/>
        </div>
      </Grid>
      <Grid className={classes.right} item md={3}>
          <Typography className={classes.rank} variant="h4">{rank_average}</Typography>
          <Typography style={{display: 'inline-block', color: 'rgba(255,255,255, .5)'}} variant="h5">{rank_count}</Typography>
        <Typography className={classes.cast} variant="h6">Cast:</Typography>
        {
          cast.map(person => {
            return <Typography 
                    key={person.id}
                    gutterBottom
                    className={classes.choice}
                    onClick={() => history.push(`/person/${person.id}`)}
                  >
                    {person.name}
                  </Typography>
          })
        }
      </Grid>
    </Grid>
  )
}

export default MovieMainContent