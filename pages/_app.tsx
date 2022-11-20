import '../styles/global.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import React from 'react'
import Wrapper from '../src/components/Wrapper/Wrapper'

import cs from '../locales/cs/translation.json'
import en from '../locales/en/translation.json'

const messages = {
  en: en,
  cs: cs,
}

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter()
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Movie db' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <script src='https://kit.fontawesome.com/081ef51cd6.js' crossOrigin='anonymous'></script>
        <title>Movie DB</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <IntlProvider
            locale={locale || 'en'}
            messages={messages[locale || '']}
            defaultLocale='en'
          >
            <Header />
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
          </IntlProvider>
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}

export default App
