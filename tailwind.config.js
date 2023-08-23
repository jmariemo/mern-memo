/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green": "rgb(84, 159, 147)",
        "sage": "rgb(159, 175, 144)",
        "blue": "rgb(37, 142, 166)",
        "vanilla": "rgb(240, 226, 163)",
        "tangerine": "rgb(239, 164, 139)"
      },
      fontFamily:{
        "display": "Unbounded",
        "sans": "Raleway"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

