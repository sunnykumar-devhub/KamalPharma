/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/containers/**/*.{js,jsx,mdx}",
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
};
