/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#011627',
        middle: '#CAF1EB',
        secondary: '#e71d36'
      }
    }
  },
  plugins: [],
}