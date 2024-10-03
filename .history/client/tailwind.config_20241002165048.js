/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{html,jsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '10rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
}

