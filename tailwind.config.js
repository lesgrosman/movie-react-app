/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        montserratAlt: ['Montserrat Alternates'],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: '#A9F2E5',
          light: '#34d399',
          dark: '#3AE6D0',
        },
        secondary: {
          default: '#1e293b',
          light: '#164e63',
        },
        rate: {
          success: '#34D399',
          warning: '#FFAC25',
          danger: '#F85A40',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
