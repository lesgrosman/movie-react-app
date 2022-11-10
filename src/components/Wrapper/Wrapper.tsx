import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import React from 'react'

const useStyles = makeStyles(() => ({
  root: {
    background: 'rgba(8, 27, 64, 1)',
    offset: 'auto',
    paddingTop: '55px',
    minHeight: '100vh',
  },
}))

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Box>{children}</Box>
    </Container>
  )
}

export default Wrapper
