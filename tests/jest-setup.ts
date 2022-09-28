import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { createTheme } from '@rneui/themed';

const mockTheme = { colors: createTheme({}).lightColors };
const mockNavigate = jest.fn();

jest.mock('axios', () => {
  const actualAxios = jest.requireActual('axios');
  return {
    ...actualAxios,
    create: () => actualAxios,
  };
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

jest.mock('@rneui/themed', () => {
  const actualRNE = jest.requireActual('@rneui/themed');
  return {
    ...actualRNE,
    useTheme: () => ({
      theme: mockTheme,
    }),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
