import Header from './Header'
import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className='max-w-7xl m-auto min-h-screen mb-20 mt-20'>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Container
