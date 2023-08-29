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
      center: true,
      padding: {
        DEFAULT: "8px",
        lg: "50px",
      },
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        body: "#ffffff",
        whitesmoke: "#f2f2f2",
        grey: "#f6f6f6",
        section: "#999999",
        menu: "#97a9ab",
        display: "#0d3443",
        secondary: "#d84000",
      },
      fontFamily: {
        inter: "Inter",
        display: "inter",
      },
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: ["12px", "12px"],
      md: ["14px", "20px"],
      xs: ["16px", "16px"],
      m: ["16px", "20px"],
      sm: ["16px", "24px"],
      base: ["16px", "30px"],
      title: ["20px", "20px"],
      lg: ["20px", "30px"],
      xl: ["24px", "40px"],
      xxl: ["36px", "50px"],
      xxxl: ["48px", "64px"],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = tailwindTheme;
