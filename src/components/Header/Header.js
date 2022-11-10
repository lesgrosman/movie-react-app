import { AppBar, Button, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    overFlow: 'hidden',
    background: 'rgba(8, 27, 64, 1)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(20),
    color: 'inherit',
  },
}))

const HideOnScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <HideOnScroll>
        <AppBar position='fixed'>
          <Toolbar className={classes.root}>
            <Button
              component={Link}
              to='/'
              className={classes.title}
            >
              Main Page
            </Button>
            <SearchInput />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Header
