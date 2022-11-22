import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <script src='https://kit.fontawesome.com/081ef51cd6.js' crossOrigin='anonymous'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
