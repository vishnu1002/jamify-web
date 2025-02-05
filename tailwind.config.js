const { heroui } = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryApp: "#c8ff88",
        backgroundDark: "#000000",
        textMain: "#e5e7eb",
        textSub: "#afafaf",
      },
      fontFamily: {
        googleRegular: ["GoogleSans-Regular", "sans-serif"],
        spotifyBold: ["SpotifyMix-Bold", "sans-serif"],
        spotifyUltra: ["SpotifyMix-Ultra", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
