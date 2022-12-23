import '../styles/global.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import Header from '@components/Header/Header'
import React from 'react'

import cs from '../locales/cs/translation.json'
import en from '../locales/en/translation.json'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Messages = Record<'en' | 'cs', any>

const messages: Messages = {
  en: en,
  cs: cs,
}

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter()
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <IntlProvider
          locale={locale || 'en'}
          messages={messages[locale as keyof Messages]}
          defaultLocale='en'
        >
          <Header />
          <div style={{ marginTop: '78px' }}>
            <Component {...pageProps} />
          </div>
        </IntlProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
