/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: '#10b981',
          light: '#34d399',
        },
        secondary: {
          default: '#1e293b',
          light: '#164e63',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
