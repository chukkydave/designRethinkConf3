/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{html,js}"],
  theme: {
    screens: {
      'xxsm': '374px',
      'xsm': '414px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.25em',
      wider: '.3em',
      widest: '.1em',
      widest: '.25em',
    },
    colors: {
      transparent: 'transparent',
      black: {
       100: '#000',
       200: '#112026',
       300:"rgba(17, 32, 38, 0.24)",
       350: "rgba(17, 32, 38, 0.24)",
      },
      primary: '#1120263D',
      white: {
        100:'#FFFFFF',
        200:"#1120263D",
        300:"rgba(255, 255, 255, 0.4)",

      },
      footer: "linear-gradient(0deg, rgba(17, 32, 38, 0.24), rgba(17, 32, 38, 0.24)), linear-gradient(0deg, #CFD8D8, #CFD8D8), #CFD8D8",
      bg: {
        light: '#CFD8D8',
        // ...
        dark: 'linear-gradient(0deg, rgba(17, 32, 38, 0.24), rgba(17, 32, 38, 0.24)), linear-gradient(0deg, #CFD8D8, #CFD8D8), #CFD8D8',
      },

      // ...
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'header': "url('../assets/images/header.gif')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}