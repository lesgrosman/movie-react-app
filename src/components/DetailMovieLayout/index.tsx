import React from 'react'

interface Props {
  imageNode: React.ReactNode
  centralNode: React.ReactNode
  rightNode: React.ReactNode
  similarNode: React.ReactNode
  annotationNode: React.ReactNode
  ratingNode: React.ReactNode
  trailerNode: React.ReactNode
}

const Content = ({
  imageNode,
  centralNode,
  rightNode,
  similarNode,
  annotationNode,
  ratingNode,
  trailerNode,
}: Props) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex justify-center items-start'>{imageNode}</div>
        <div className='w-1/2'>{centralNode}</div>
        <div className='pl-16'>{rightNode}</div>
      </div>
      <div className='flex flex-col gap-5 max-w-4xl'>
        <div>{similarNode}</div>
        <div>{annotationNode}</div>
        <div>{ratingNode}</div>
        <div>{trailerNode}</div>
      </div>
    </div>
  )
}

export default Content
