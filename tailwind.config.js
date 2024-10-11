/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#05060f', // Example hex color for primary
      },
      textColor: {
        primary: '#d8ecf8', // Example hex color for primary text
      },
    },
  },
  plugins: [],
}

