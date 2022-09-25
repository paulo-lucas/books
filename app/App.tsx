import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createTheme, ThemeProvider } from '@rneui/themed';

const theme = createTheme({});

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Text>app</Text>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
