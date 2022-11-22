module.exports = {
  target: 'serverless',
  i18n: {
    locales: ['cs', 'en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w185/**',
      },
    ],
  },
}
