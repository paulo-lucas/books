import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#00DAC4',
    secondary: '#2C2A55',
    surface: '#F8F8F8',
  },
  darkColors: {
    primary: '#00DAC4',
    secondary: '#2C2A55',
    background: '#373747',
    black: '#CDCDCD',
    surface: '#252837',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});

export default theme;
