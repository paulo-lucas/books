import 'react-native';
import React, { ReactElement } from 'react';
import { render, RenderOptions, screen, act } from '../../../tests/test-utils';
import { BooksProvider } from './';
import { Bookshelf } from '@app/components';
import Home from '@app/screens/Home';
jest.useFakeTimers();

const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  return render(<BooksProvider>{ui}</BooksProvider>, options);
};

describe('books context', () => {
  it('should render correctly with consumer', async () => {
    customRender(<Home />);
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should render empty bookshelf', () => {
    customRender(<Bookshelf />);
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText('There are no books to show.')).toBeTruthy();
  });
});
