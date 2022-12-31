module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#141115",
        // secondary: "#C89B7B",
        secondary: "#F8F991",
        customRed: "#A30015",
        customWhite: "#999696",
      },
      customGradient: {
        background:
          "linear-gradient(245.39deg, #fc65ed -35.14%, #0500ff 143.06%)",
      },
      backgroundImage: {
        homeBg: "url('/images/home-bg.jpg')",
      },
    },
  },
  plugins: [],
};
