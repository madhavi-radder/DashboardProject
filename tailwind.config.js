/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        vxl: "1440px",
        xl: "1280px",
        xs: "641px",
      },
      fontFamily: {
        'poppins-black': ['Poppins Black'],
        'poppins-bold': ['Poppins Bold'],
        'poppins-semibold': ['Poppins Semibold'],
        'poppins-medium': ['Poppins Medium'],
      },
    },
  },
  plugins: [],

}

