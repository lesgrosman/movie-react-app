import React from 'react'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#00142d',
    offset: theme.mixins.toolbar,
    paddingTop: theme.typography.pxToRem(55),
  },
}))

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        {children}
      </Box>
    </Container>
  )
}



export default Wrapper
