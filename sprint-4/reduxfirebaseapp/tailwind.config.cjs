/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 1s linear forwards',
      },
      fontFamily: {
        'montserrat': ['Montserrat', "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "bg-login": "url(https://i.ibb.co/xH4xQtt/bg-strawberry.jpg)",
    },
    },
  },
  plugins: [],
}