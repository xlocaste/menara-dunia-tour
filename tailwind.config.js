/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#180161',
        secondary: '#4F1787',
        accent: '#EB3678',
        list: '#FB773C',
      },
    },
  },
  plugins: [],
}