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
      background: "#e9f5f9",
      primary: {
        100: "#2596be",
        200: "#2187ab",
        300: "#1e7898",
        400: "#1a6985",
        500: "#165a72",
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
