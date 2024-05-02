/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-1": "#0e1e2e",
        "navy-2": "#0a2749",
        "navy-3": "#1c3858",
        "gold-1": "#8B6C25",
        "gold-2": "#cba45d",
        "gray-1": "#cdcdc3",
        "gray-2": "#595756",
      },
    },
  },
  plugins: [],
}
