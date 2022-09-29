import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { SearchBar } from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';

const onChangeSearch = jest.fn();
const onClearSearch = jest.fn();

const renderSearchBar = (searchText = '') => {
  return render(
    <BooksContext.Provider
      value={
        {
          searchText,
          onChangeSearch,
          onClearSearch,
        } as unknown as BooksContextData
      }>
      <SearchBar />
    </BooksContext.Provider>,
  );
};

describe('search bar', () => {
  it('should render correctly', () => {
    renderSearchBar();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should display text', () => {
    const mockText = 'something';
    renderSearchBar(mockText);
    expect(screen.getByDisplayValue(mockText)).toBeTruthy();
  });
});
