import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';

import ThemedAppContainer from '../app/theme/ThemedAppContainer';
import theme from '../app/theme';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ThemedAppContainer>{children}</ThemedAppContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
