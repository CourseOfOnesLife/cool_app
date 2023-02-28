/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))'

  },
  gridTemplateRows: {
    // Simple 16 column grid
    '16': 'repeat(16, minmax(0, 1fr))'

},
  gridColumnStart: {
    
    '12': '12',
    '13': '13',
    '14': '14',
    '15': '15',
    '16': '16',
    '17': '17',
  },
  gridColumnEnd: {
    '12': '12',

    '13': '13',
    '14': '14',
    '15': '15',
    '16': '16',
    '17': '17',
  },
  gridRowStart: {
    '13': '13',
    '14': '14',
    '15': '15',
    '16': '16',
    '17': '17',
  },
  gridRowEnd: {
    '13': '13',
    '14': '14',
    '15': '15',
    '16': '16',
    '17': '17',
  },

  },
  },




  plugins: [],
}
