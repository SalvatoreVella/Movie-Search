/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'custom': 'calc(100vh - 130px)',
      },

      height: {
        "84": "22rem"
      }
    },
  },
  plugins: [],
}
