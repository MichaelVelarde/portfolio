/** @type {import('tailwindcss').Config} */
export default{
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            primary: "#000000",
            secundary: "#FFFFFF",
        },
        fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        },
         extend: {
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        }}}
    },
    plugins: [],
  }
  
  
 