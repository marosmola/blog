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
        "teal-light": "#32E0E4",
        "teal-dark": "#09B0BA"
      },
    }
  },
  darkMode: "class",
  plugins: [],
}
