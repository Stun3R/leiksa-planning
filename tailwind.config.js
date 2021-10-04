const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    linearBorderGradients: (theme) => ({
      colors: theme('colors'),
      background: theme('colors'),
    }),
    colors: {
      rainbow: {
        yellow: '#F7B500',
        orange: '#ee7749',
        purple: '#B620E0',
        lily: '#875ef4',
        cyan: '#32C5FF',
      },
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
