import 'react-native';
import React, { ReactElement } from 'react';
import { render, RenderOptions, screen } from '../../../tests/test-utils';
import { BookDetailsProvider } from './';
import { BooksContext } from '../BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';
import { BookInfo } from '@app/components';
jest.useFakeTimers();

const mockGoBack = jest.fn();

const isFavorite = jest.fn();
const toggleFavorite = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualRNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...actualRNavigation,
    useRoute: () => ({
      params: {},
    }),
    useNavigation: () => ({
      navigation: { goBack: mockGoBack },
    }),
  };
});

const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  return render(
    <BooksContext.Provider
      value={{ isFavorite, toggleFavorite } as unknown as BooksContextData}>
      <BookDetailsProvider>{ui}</BookDetailsProvider>
    </BooksContext.Provider>,
    options,
  );
};

describe('details context', () => {
  it('should render correctly with consumer', async () => {
    customRender(<BookInfo />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
