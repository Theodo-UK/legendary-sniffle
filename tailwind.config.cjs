module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {      
      fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      cobeHeavy: ['CobeHeavy', 'sans-serif'],
      cobeSemiBold: ['CobeSembiBold', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    colors: {
      offwhite: '#cbcbcb',
      white: '#fff',
      black: '#000',
      green: '#6abd9e',
      dark_green: '#33a852',
      yellow: '#fabc05',
      orange: '#fe6d01',
      blue: '#17539F',
      light_blue: '#4284f3',
      red: '#ea4335',
      light_grey: '#e1e1e1',
      x_light_grey: '#dadada',
      grey: '#666666',
    },
    spacing: {
      xxs: '2px',
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '40px',
      '2xl': '400px',
    },
    },
  },
  plugins: [],
};
