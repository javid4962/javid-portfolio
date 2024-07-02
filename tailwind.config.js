/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(https://img.icons8.com/?size=100&id=78597&format=png&color=000000),pointer',
      },
    },
  },
   plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
}
