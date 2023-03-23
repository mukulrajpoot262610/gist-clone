/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#2D333B',
        light: '#22272E',
        border: "#444C56",
        button: {
          secondary: '#373E47',
          primary: '#347D39'
        },
        text: {
          blue: "#3282F5",
          white: '#CDD9E5',
          grey: '#768390'
        },
      },
      fontFamily: {
        monospace: 'Space Mono'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}