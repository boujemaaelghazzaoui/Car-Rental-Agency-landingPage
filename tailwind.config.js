/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['Poetsen One', 'sans-serif'],
        poppins : ["Poppins", 'sans-serif']
      },
      colors: {
          'orange': '#F2A819',
      },
      
    },
  },
  plugins: [],
}
