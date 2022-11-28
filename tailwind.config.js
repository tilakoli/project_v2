module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#141115",
        primary: "#f5f5f5",
        customBlue: "#2E5EAA",
        customRed: "#A30015",
        creamyWhite: "#E6FAFC",
      },
      backgroundImage: {
        homeBg: "url('/images/home-bg.jpg')",
      },
    },
  },
  plugins: [],
};
