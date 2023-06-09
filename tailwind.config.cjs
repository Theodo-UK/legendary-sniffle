module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cobeHeavy: ['CobeHeavy', 'sans-serif'],
        cobeSemiBold: ['CobeSembiBold', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        offwhite: '#F2F2F2',
        white: '#fff',
        black: '#000',
        dark_grey: '#343434',
        green: '#6abd9e',
        dark_green: '#33a852',
        yellow: '#fabc05',
        orange: '#fe6d01',
        blue: '#17539F',
        light_blue: '#4284f3',
        red: '#ea4335',
        light_grey: '#D9D9D9',
        x_light_grey: '#dadada',
        grey: '#9E9E9E',
        wizz_pink: '#C6007E',
        wizz_dark_pink: '#980462',
        user_grey: '#828282',
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
