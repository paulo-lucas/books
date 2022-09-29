import 'react-native';
import React from 'react';
import { render, screen, act } from '@testing-library/react-native';
import App from './App';
jest.useFakeTimers();

describe('app', () => {
  it('should renders correctly', async () => {
    render(<App />);
    act(() => {
      jest.runAllTimers();
    });
    expect(screen).toMatchSnapshot();
  });
});
