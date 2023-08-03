module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {    
      colors: {
      primary: '#FFA24A',
      textColor: '#2F1F1F',
      darkerOrange: '#FF7F50',
      lighterOrange: '#FFB347',
      },      
      width: {
        '300': '75rem',
        '280':'60rem',
      },
      height:{
        '300': '67.5rem',
      },
      padding:{
        pyButton: '10px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
