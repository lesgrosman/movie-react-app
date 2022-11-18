import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-7xl m-auto mt-20 min-h-screen'>
      <div>{children}</div>
    </div>
  )
}

export default Wrapper
