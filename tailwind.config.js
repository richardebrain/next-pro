module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen:{
       sm:'640px',
       md:'768px',
        lg:'1024px',
        xl:'1280px',
        

    },
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
      'black': '#000000',
      'custom-blue':'#0070f3',
      'custom-white':'#fafafa',
      'borderLightGray': '#eaeaea',
    },
    extend: {
      
    },
  },
  plugins: [],
}
