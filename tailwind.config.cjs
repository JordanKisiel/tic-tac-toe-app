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
      animation: {
        'press-down': 'press 0.25s cubic-bezier(0.4, 0, 0.6, 1)',
        'flip-in': 'flip 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.35s both',
        'fade': 'fadein 0.35s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        press: {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(0.75, 0.75)' },
          '100%': { transform: 'scale(1, 1)' }
        },
        flip: {
          '0%': { transform: 'rotateX(-80deg) translateY(-50%)', opacity: '0' },
          '100%': { transform: 'rotate(0) translateY(-50%)', opacity: '1' }
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
    },
  },
  plugins: [],
}
