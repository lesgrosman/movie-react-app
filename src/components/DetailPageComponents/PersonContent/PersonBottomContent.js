import React from 'react'
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
  }
})


const PersonMainContent = ({ person }) => {
  // const { title, cast, rank_average, rank_count,poster } = person
  // const classes = useStyles(rank_average)

  return (  
    null
  )
}

export default PersonMainContent