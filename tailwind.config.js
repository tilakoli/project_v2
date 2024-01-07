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
        primaryBlack: "#0D0D0D",
        // secondary: "#C89B7B",
        secondary: "#F8F991",
        customRed: "#A30015",
        customWhite: "#c9c0bb",
      },
      customGradient: {
        background:
          "linear-gradient(245.39deg, #fc65ed -35.14%, #0500ff 143.06%)",
      },
      fontFamily: {
        primary: ['Rubik Scribble', "sans-serif"],
      },
      backgroundImage: {
        backgroundImage1: "url('/background1.jpg')",
        backgroundImage2: "url('/background2.jpg')",
        backgroundImage3: "url('/background3.jpg')",
        backgroundImage4: "url('/background4.jpg')",
      },
    },
  },
  plugins: [],
};
