/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'lilac': '#9b7bd1',
        'lilac-dark': '#6f4ea1'
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(29,31,41,0.06)'
      }
    }
  },
  plugins: [],
}