/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F3EC',
        ink: '#1C1B18',
        tortoise: '#B86B28',
        moss: '#3E4A3D',
        clay: '#D8C4A9',
      },
      fontFamily: {
        display: ['Newsreader', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
