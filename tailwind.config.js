/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./**/*.{html,js}"],
  theme: {
     extend: {
          container: {
               center: true,
          },
          colors: {
               'secRed': '#e94c2a',
               'secWhite': '#F5F5F5',
          }
     },
  },
  plugins: [],
}

