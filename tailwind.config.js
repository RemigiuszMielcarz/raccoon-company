/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const tailwindTheme = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      tight: "0.30px",
      wide: "0.5px",
      base: "1px",
      xwide: "1.5px",
    },
    container: {
      padding: "16px",
      center: true,
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        body: "#0d0d0d",
        red: "#f20505",
        whitesmoke: "#f2f2f2",
      },
      fontFamily: {
        lato: "Lato",
        syne: "Syne",
        display: "syne",
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: ["12px", "12px"],
      xs: ["16px", "16px"],
      sm: ["14px", "24px"],
      base: ["16px", "30px"],
      title: ["20px", "20px"],
      lg: ["20px", "28px"],
      xl: ["24px", "36px"],
      xxxl: ["48px", "64px"],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = tailwindTheme;
