import { BASE_IMAGE } from '../utils/constants'
import { Nullable } from 'utils/types'
import Head from 'next/head'
import React from 'react'

interface Props {
  title?: string
  description?: string
  imageUrl?: Nullable<string>
}

export const Seo = ({ title = '', description = '', imageUrl = '' }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} key='title' />
      <meta property='og:description' content={description} key='title' />
      <meta property='og:image' content={`${BASE_IMAGE}${imageUrl}`} />
      <meta property='og:type' content='website' />
    </Head>
  )
}

export default Seo
