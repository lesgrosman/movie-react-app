import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchInput from '../SearchInput/SearchInput'


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    overFlow: 'hidden',
    backgroundColor: '#1a237e' 
    // backgroundColor: '#3151b5',
    // backgroundColor: '#040068'

  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit'
  }
}));

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar  className={classes.root}>
          <Button component={Link} to="/" className={classes.title}>
            Main Page
          </Button>
          <SearchInput/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
