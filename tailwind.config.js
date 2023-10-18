/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#1976d2',
      },
      height:{
        120: '34rem'
      }
    },
  },
  plugins: [],
}