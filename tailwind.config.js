/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#5390EB',
          light_blue: '#E0EAFF',
          black: '#1E232A',
          grey: '#E7EAEA',
          dark_grey: '#1E232A',
          grey_blue: '#E2E9F3',
          light_grey: '#F8F9FB',
        }
      }
    },
  },
  plugins: [],
}
