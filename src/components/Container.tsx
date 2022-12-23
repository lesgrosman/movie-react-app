import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-7xl m-auto min-h-screen mb-20'>
      <div>{children}</div>
    </div>
  )
}

export default Container
