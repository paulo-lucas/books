import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';

import ThemedAppContainer from '@app/theme/ThemedAppContainer';
import Router from '@app/router';
import theme from '@app/theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ThemedAppContainer>
          <Router />
        </ThemedAppContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
