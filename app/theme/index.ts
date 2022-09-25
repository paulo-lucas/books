import { createTheme } from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#671CDE',
    surface: '#F8F8F8',
  },
  darkColors: {
    primary: '#671CDE',
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
