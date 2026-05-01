/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arena: "#EDE6DB",
        salvia: "#A8B2A1",
        piedra: "#CFC7BD",
        cacao: "#3A2F2A",
        dorado: "#D6C3A3",
        rojo: "#9B2226",
      },
      fontFamily: {
        sans: ['"Manrope"', '"General Sans"', 'sans-serif'],
        serif: ['"Libre Baskerville"', '"Lora"', 'serif'],
        mono: ['"IBM Plex Mono"', '"Fira Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '3rem': '3rem',
      }
    },
  },
  plugins: [],
}
