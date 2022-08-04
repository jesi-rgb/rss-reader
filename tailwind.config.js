/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#00625C",
        "accent-1-hover": "#23c3b9",
        "accent-2": "#669B98",
      },

      fontFamily: {
        title: "IBM Plex Serif",
        body: "IBM Plex Sans",
      },
    },
  },
  plugins: [],
};
