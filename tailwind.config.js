/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'class', // Enables dark mode using a class
  theme: {
    extend: {
      colors: {
        'primary': '#E58411', // Custom primary color
        'secondary': '#1E1E1E', // Custom secondary color
        'secondary-bg': "#F7F7F7", // Custom background color
      }
    },
  },
  plugins: [],
}