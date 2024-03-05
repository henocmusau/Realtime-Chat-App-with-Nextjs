/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        gradient: {
          // '0%, 100%': { transform: 'url(../assets/images/bg1.svg)',  },
          '0%': { backgroundPosition: 'center' },
          '50%': { backgroundPosition: 'top' },
          '100%': { backgroundPosition: 'left' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        gradient: 'gradient 7s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}