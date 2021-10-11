const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    linearBorderGradients: (theme) => ({
      colors: theme('colors'),
      background: theme('colors'),
    }),
    colors: {
      primary: '#875ef4',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      purple: colors.purple,
      amber: colors.amber,
      fuschia: colors.fuchsia,
      blue: colors.cyan,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      body: ['Poppins'],
    },
  },
  plugins: [],
}
