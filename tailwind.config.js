/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#5a5a5a",
          600: "#484848",
          700: "#3b3b3b",
          800: "#181818",
          900: "#0e100f",
        },
      },
    },
  },
  plugins: [],
};
