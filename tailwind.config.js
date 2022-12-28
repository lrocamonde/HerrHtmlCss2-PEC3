/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      backblue: '#658ce0',
      white: '#f2f2f2',
      black: '#212529',
      gray: '#343a40',
      red: 'red',
      backcard: '#d3d3d34d'
    },
    fontFamily: {
      'helvet': ["Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"]
    },
    minWidth: {
      '480': '480px',
    },
    screens: {
      'bk1': '883px',
      'bk2': '1255px'
    },
    extend: {
      gridTemplateColumns: {
        'small': '3fr 2fr',
        'medium': 'repeat(2,1fr) 2fr repeat(2,1fr)',
        'large': '3fr 3fr 2fr 1fr'
      },
      gridTemplateRows: {
        'medium': '2fr repeat(3,1fr)'
      }
    },
  },
  plugins: [],
}
