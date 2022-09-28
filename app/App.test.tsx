import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from './App';

it('renders correctly', () => {
  render(<App />);

  expect(screen.toJSON()).toMatchSnapshot();
});
