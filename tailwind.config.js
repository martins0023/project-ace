/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'monument': ['"Monument Extended"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'host-grotesk': ['"Host Grotesk"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'Poppins'],
        'montserrat-alternates': ['"Montserrat Alternates"', 'Poppins'],
      },

      colors: {
        primary: "#040C11",
        secondary: "#2356D3",
      },
    },
  },
  plugins: [],
};
