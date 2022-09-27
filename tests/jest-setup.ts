import mockedAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { createTheme } from '@rneui/themed';

const mockedTheme = { colors: createTheme({}).lightColors };
const mockedNavigate = jest.fn();

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
      navigate: mockedNavigate,
    }),
  };
});

jest.mock('@rneui/themed', () => {
  const actualRNE = jest.requireActual('@rneui/themed');
  return {
    ...actualRNE,
    useTheme: () => ({
      theme: mockedTheme,
    }),
  };
});

jest.mock(
  '@react-native-async-storage/async-storage',
  () => mockedAsyncStorage,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
