import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { BackButton } from './index';

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualRNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...actualRNavigation,
    useNavigation: () => ({
      navigation: {
        goBack: mockGoBack,
      },
    }),
  };
});

describe('back button', () => {
  it('should render correctly', async () => {
    render(<BackButton />);
    expect(screen.toJSON()).toMatchSnapshot('book');
  });
});
