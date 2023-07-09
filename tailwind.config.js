/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: "0rem",
        center: true
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"]
      },
      colors: {
        primary: "#013e39",
        secondary: "#c9fec6",
        lightPrimary: "#339977",
        white: "#f6f8ff"
      }
    }
  },
  plugins: []
}
