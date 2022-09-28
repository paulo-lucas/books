import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from '@rneui/themed';

import ThemedAppContainer from '../app/theme/ThemedAppContainer';
import theme from '../app/theme';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ThemedAppContainer>{children}</ThemedAppContainer>
  </ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
