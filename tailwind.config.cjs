/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Roboto, Arial, sans-serif',
      }
    },
  },
  plugins: [],
}
