/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./**/*.{html,js}"],
  theme: {
     extend: {
          container: {
               center: true,
          },
          colors: {
               'primary': '#DB4444',
               'dark': '#121212',
               'gray': '#f6f5f4',
               'gray2': "#F0EEED",                                                   
          }
     },
  },
  plugins: [],
}

