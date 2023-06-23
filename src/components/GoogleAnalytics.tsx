import Script from 'next/script'

const GoogleAnalytics = () => (
  <>
    <Script
      strategy='afterInteractive'
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script strategy='afterInteractive'>
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
    </Script>
  </>
)

export default GoogleAnalytics
