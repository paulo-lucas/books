import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import Details from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';

const isFavorite = jest.fn();
const toggleFavorite = jest.fn();

const renderDetails = () =>
  render(
    <BooksContext.Provider
      value={{ isFavorite, toggleFavorite } as unknown as BooksContextData}>
      <Details />
    </BooksContext.Provider>,
  );

describe('details screen', () => {
  it('should render correctly', () => {
    renderDetails();
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
