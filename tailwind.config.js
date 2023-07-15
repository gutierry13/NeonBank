/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroPattern: 'url("../assets/bg-hero.svg")'
      },
      fontFamily: {
        poppins:'var(--font-poppins)',
        inter:'var(--font-inter)',
      },
      colors: {
        blue:'#0073ce',
        blueLight:'#00a5f0',
        greenLight:'#00d7d7',
        yellow:'#ffc800',
        gray600:'#33303e',
        gray500:'#4e4b59',
        gray400:'#5f5c6b',
        gray300:'#7a7786',
        gray200:'#c6c5ce',
        gray100:'#f1f0f5',

      },
        
    },
    
  },
  plugins: [],
}
