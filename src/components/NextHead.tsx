import Head from 'next/head'
import Script from 'next/script'

const NextHead = () => {
  return (
    <Head>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-1GGRSVGRJS' />
      <Script strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1GGRSVGRJS');
        `}
      </Script>
    </Head>
  )
}

export default NextHead
