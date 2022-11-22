import '../styles/global.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
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
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <IntlProvider locale={locale || 'en'} messages={messages[locale || '']} defaultLocale='en'>
          <Header />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
        </IntlProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
