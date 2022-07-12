/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    colors: {
      blue: "#14ABC7",
      white: "#FFF",
      gray: "#4F4E51",
      lightgray: "#ACACAC",
      darkgray: "#14111C",
      slate: "#A6A0B1",
      lightslate: "#1F1D31",
      light: "#E2E8F0",
      black: "#000",
      red: "#FF2625",
    },
    extend: {
      screens: {
        xsm: "24rem",
      },
    },
  },
  plugins: [],
};
