import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      style={{
        background: 'rgba(8, 27, 64, 1)',
        offset: 'auto',
        paddingTop: '55px',
        minHeight: '100vh',
      }}
    >
      <Box>{children}</Box>
    </Container>
  )
}

export default Wrapper
