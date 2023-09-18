/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green': '#A2C579',
      'black': '#000000',
      'Main':'#279EFF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green':  {
        '900': '#13ce66',
        '800': '#13ce66',
        '700': '#13ce66',
        '600': '#13ce66',
        '900': '#13ce66',
        '800': '#13ce66',
        '700': '#13ce66',
        '100': '#13ce66',
        '200': '#13ce66',
        '400': '#13ce66',


      },
      
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': {
        '900': '#8492a6',
        '800': '#8492a6',
        '700': '#8492a6',
        '600': '#8492a6',
        '900': '#8492a6',
        '800': '#8492a6',
        '700': '#8492a6',
        '100': '#8492a6',
        '200': '#8492a6',
        '400': '#8492a6',


      },
      'gray-light': '#d3dce6',
      'indigo':'#6366F1',
      'nav':'#7091F5',
      'dash':'#8CABFF'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

