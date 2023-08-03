/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#0d0d0d",
        white: "#fff",
        red: "#f20505",
        whitesmoke: "#f2f2f2",
      },
      fontFamily: {
        lato: "Lato",
        syne: "Syne",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      xl: "20px",
      "11xl": "30px",
      "45xl": "64px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
