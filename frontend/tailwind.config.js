/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        'sans':"Poppins",
        'serif':"Roboto",
      },
      colors:{
        "cust-blue":"#2A82FE",
        "cust-cream":"#D9D9D9",
        "cust-black":"#22232A",
        "cust-sinan":"#263238",
      },
    },
  },
  plugins: [],
}

