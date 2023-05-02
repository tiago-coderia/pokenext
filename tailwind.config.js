/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: "Helvetica",
      },
      colors: {
        default: "#333333",
        orange: "#e33d33",
      },
    },
    screens: {
      sm: "570px",
      // => @media (min-width: 640px) { ... }

      md: "840px",
      // => @media (min-width: 768px) { ... }

      lg: "1080px",
      // => @media (min-width: 1024px) { ... }

      xl: "1330px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1570px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
