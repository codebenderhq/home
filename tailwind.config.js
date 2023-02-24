/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,js,svg,css}",
    "./src/_app/**/*.{html,js,svg,css,jsx}",
    "./src/app/**/**/*.{html,js,svg,css, jsx}",
    "./src/**/*.{html,css,svg}",
    "./src/app/*.{html,css}"
 
],
  theme: {
    extend: {},
  },
  plugins: [],
}
