/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#083344',
        secondary: '#ea970a',
        'secondary-dark': '#d68a0a'
      },
    },
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
    },
  },
  plugins: [],
}

