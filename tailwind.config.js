const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Zen Kaku Gothic Antique", ...defaultTheme.fontFamily.sans],
        fancy: ["Dancing Script"],
      },
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1024px",
      laptopL: "1440px",
      desktop: "1920px",
      fourK: "2560px",
    },
    colors: {
      main: "#08434E",
      bright: "#f8f9fa",
      dark: "#05282F",
      strong: "#FF4821",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
