/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      'md': '500px',
      'lg': '1000px',
    },
    extend: {
      colors: {
        'medium-blue': '#31C3BD',
        'bright-blue': '#65E9E4',
        'mustard-yellow': '#F2B137',
        'light-yellow': '#FFC860',
        'very-dark-blue': '#1A2A33',
        'dark-blue': '#1F3641',
        'gray': '#A8BFC9',
        'off-white': '#DBE8ED',
      },
      fontFamily: {
        'sans': ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'big': 'inset 0px -8px 0px #10212A',
        'medium': 'inset 0px -6px 0px #10212A',
        'small': 'inset 0px -4px 0px #10212A',
      },
    },
  },
  plugins: [],
}
