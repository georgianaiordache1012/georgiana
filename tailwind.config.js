/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '25%': { transform: 'rotate(90.0deg)' },
          '50%': { transform: 'rotate(180.0deg)' },
          '100%': { transform: 'rotate(360.0deg)' },
        },
      },
      animation: {
        'spin-pic': 'wave 5s linear infinite',
      },
    },
  },
  plugins: [],
}

