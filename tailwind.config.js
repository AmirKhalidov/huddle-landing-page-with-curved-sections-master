/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mine425': '425px', // 425px
      },
    },
  },
  plugins: [],
}