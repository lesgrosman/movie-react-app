import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
    fontSize: '20px',
    color: 'inherit'
  },
}));

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar  className={classes.root}>
          <Button component={Link} to="/" className={classes.title}>
            Main Page
          </Button>
          <Button component={Link} to="/search_page" color="inherit">Search</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
