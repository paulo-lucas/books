import 'react-native';
import React from 'react';
import { render, screen, act } from '@testing-library/react-native';
import App from './App';

describe('app', () => {
  it('should renders correctly', async () => {
    jest.useFakeTimers();
    render(<App />);
    act(() => {
      jest.runAllTimers();
    });
    expect(screen).toMatchSnapshot();
  });
});
