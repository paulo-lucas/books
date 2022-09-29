import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { BackButton } from './index';

describe('back button', () => {
  it('should render correctly', async () => {
    render(<BackButton />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
