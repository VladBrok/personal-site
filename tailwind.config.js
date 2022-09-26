/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    colors: {
      blue: "#0F8296",
      lightblue: "#14ABC7",
      white: "#FFF",
      gray: "#4F4E51",
      lightgray: "#ACACAC",
      darkgray: "#14111C",
      slate: "#A6A0B1",
      lightslate: "#1F1D31",
      light: "#E2E8F0",
      black: "#000",
      red: "#DC3545",
      lightred: "#E25A68",
      link: "#1A73E8",
      lightlink: "#2E80EA",
    },
    extend: {
      screens: {
        xsm: "23rem",
      },
    },
  },
  plugins: [],
};
