const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
    },
    minHeight: {
      '0': '0',
      '25': '25vh',
      '50': '50vh',
      '75': '75vh',
      'full': '100vh',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
