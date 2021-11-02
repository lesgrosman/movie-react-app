import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import SearchInput from '../SearchInput/SearchInput';


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

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
      <AppBar position="fixed">
        <Toolbar  className={classes.root}>
          <Button component={Link} to="/" className={classes.title}>
            Main Page
          </Button>
          <SearchInput/>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Header
