const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-notosans)', ...fontFamily.sans],
        inter:['var(--font-inter)',...fontFamily.sans]
      },
      colors: {
        "primary-sky": "#72C6EF",
        "primary-blue": "#004E8F",
      },
      animation: {
        "slide-fwd-bottom": "slide-fwd-bottom 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940)  forwards",
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        "slide-fwd-bottom": {
          "0%": {
            transform: "translateY(-100%)",
          },
          to: {
            transform:  "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
  ],
};
