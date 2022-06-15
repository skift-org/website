/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
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
  plugins: [],
}
