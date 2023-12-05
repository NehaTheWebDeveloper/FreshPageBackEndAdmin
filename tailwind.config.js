/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#f2f2f2", 
        secondary: "#C74225", 
        gray1: "#cecece",
        gray2:" #dfdfdf",
            },
    },
  },
  plugins: [],
}
// bg-gradient-radial from-gray1 to-gray2