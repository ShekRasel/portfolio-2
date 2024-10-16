/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },  // Start hidden and down
          '100%': { opacity: 1, transform: 'translateY(0)' },  // End visible and at original position
        },
      },
      animation: {
        fadeUp: 'fadeUp 2s ease-out forwards',  // Define the animation with duration and timing
      },
    },
  },
  plugins: [],
}
