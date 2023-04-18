/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotateZ(0.0deg)' },
          '25%': { transform: 'rotateZ(90.0deg)' },
          '50%': { transform: 'rotateZ(180.0deg)' },
          '100%': { transform: 'rotateZ(360.0deg)' },
        },
      },
      animation: {
        'spin-pic': 'wave 5s linear infinite',
      },
    },
  },
  plugins: [],
}

