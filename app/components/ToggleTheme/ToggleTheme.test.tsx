import 'react-native';
import React from 'react';
import { fireEvent, render, screen } from '../../../tests/test-utils';
import { ToggleTheme } from './';

const renderToggleTheme = () => render(<ToggleTheme />);

describe('toggle theme button', () => {
  it('should render correctly', () => {
    renderToggleTheme();
    expect(screen.toJSON()).toMatchSnapshot('toggle theme button');
  });

  it('should render correctly when toggled', () => {
    renderToggleTheme();

    fireEvent(screen.getByTestId('toggle-theme-button'), 'onPress');

    expect(screen.toJSON()).toMatchSnapshot('toggle theme button dark mode');
  });
});
