/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx", 
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./index.html",
],
  theme: {
    extend: {
      colors: {
        blue: {
          300: '#023047',
    },
    orange: {
      300: '#FFB703'
    },},
    },
  },
  plugins: [],
}