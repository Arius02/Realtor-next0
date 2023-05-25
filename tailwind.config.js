/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  darkMode:"class",
  theme: {
    colors:{
      'white': '#ffffff',
      primary: {
        50: "#F5F5F5",
        100: "#EAEAEA",
        200: "#CBCBCB",
        300: "#ABABAB",
        400: "#6C6C6C",
        500: "#2D2D2D",
        600: "#292929",
        700: "#1B1B1B",
        800: "#141414",
        900: "#0E0E0E",
      },
      "green": {
        "50": "#f3fce8",
        "100": "#e6f9d2",
        "200": "#cef3a4",
        "300": "#b5ed77",
        "400": "#9de749",
        "500": "#84e11c",
        "600": "#6ab416",
        "700": "#4f8711",
        "800": "#355a0b",
        "900": "#1a2d06"
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
