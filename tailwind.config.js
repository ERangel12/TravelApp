/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor:'#252c5e',
        secundaryColor:'#ffffff',
        hover:'#1c214a',
      },
      // boxShadow:{
      //   loginCard : '0px 3px 9px -1px rgba(0,0,0,0.39);',
      // },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(to bottom, #ffffff, #cfcee1, #9ba0c4, #6276a8, #0c508d);',
      // }
    },
  },
  plugins: [],
}
