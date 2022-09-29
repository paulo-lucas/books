import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import Home from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';
jest.useFakeTimers();

const mockTitle = 'As crônicas de Nárnia';
const mockAuthors = ['Clive Staples Lewis'];

const isFavorite = jest.fn();
const toggleFavorite = jest.fn();
const books = {
  page: 0,
  itemsPerPage: 20,
  total: 20,
  data: {
    id: 'I2QvPwAACAAJ',
    volumeInfo: {
      title: mockTitle,
      authors: mockAuthors,
      publishedDate: '2009',
      description:
        'Este livro apresenta as sete crônicas de Nárnia integralmente, num único volume.',
    },
  },
};
const searchText = '';
const onChangeSearch = jest.fn();
const onClearSearch = jest.fn();
const fetchBooks = jest.fn();
const toggleOrderBy = jest.fn();
const toggleFavoriteFilter = jest.fn();
const orderBy = 'relevance';
const filterByFavorites = 'false';
const onChangePage = jest.fn();

const renderHome = (refreshing = false) =>
  render(
    <BooksContext.Provider
      value={
        {
          books,
          refreshing,
          searchText,
          onChangeSearch,
          onClearSearch,
          fetchBooks,
          toggleOrderBy,
          toggleFavoriteFilter,
          orderBy,
          filterByFavorites,
          isFavorite,
          toggleFavorite,
          onChangePage,
        } as unknown as BooksContextData
      }>
      <Home />
    </BooksContext.Provider>,
  );

describe('home screen', () => {
  it('should render correctly', () => {
    renderHome();
    expect(screen.toJSON()).toMatchSnapshot('home screen');
  });

  it('should render correctly when refreshing', () => {
    renderHome(true);
    expect(screen.toJSON()).toMatchSnapshot('home screen refreshing');
  });
});
