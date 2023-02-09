import Header from './Header'
import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-7xl m-auto min-h-screen mb-20'>
      <Header />
      <div style={{ marginTop: '78px' }}>{children}</div>
    </div>
  )
}

export default Container
