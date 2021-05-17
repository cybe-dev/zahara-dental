module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      accent: "#ffeebb",
      transparent: "transparent",
      background: "#e6f8f9",
      primary: {
        100: "#00b4c5",
        200: "#00a2b1",
        300: "#00909e",
        400: "#007e8a",
        500: "#006c76",
      },
      grayscale: {
        100: "#ffffff",
        200: "#e6e6e6",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
        1000: "#000000",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
