import '../styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IntlProvider } from 'react-intl'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'
import React from 'react'

import { AuthProvider } from '../src/context/useAuthContext'
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
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <IntlProvider
          locale={locale || 'en'}
          messages={messages[locale as keyof Messages]}
          defaultLocale='en'
        >
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </IntlProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
