const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: '#F8F7F1'
      },
      fontFamily: {
        'sans': ['"Sansation"', ...defaultTheme.fontFamily.sans],
        'tenor': ['"Tenor Sans"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

