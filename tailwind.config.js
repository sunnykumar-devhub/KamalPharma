/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7A3E9D',
        'primary-light': '#9B64C0',
        'primary-dark': '#5E2F7A',
        'secondary': '#F3E8FF',
        'accent': '#5E2F7A',
        'deepest': '#1A0B2E',
        'authority': '#3B1E4D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
