/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          bg: "#fdfaf6", // parchment
          cream: "#f5f5dc",
          brown: "#4a3728",
          orange: "#d48c6a",
          sage: "#b4ba9a",
          rose: "#d9b4ab",
          sand: "#e2d1c3"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'subtle-zoom': 'subtleZoom 20s infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
