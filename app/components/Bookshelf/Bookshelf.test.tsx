import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { Bookshelf } from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';
import { Volume } from '@app/interfaces/volume';

const mockTitle = 'As crônicas de Nárnia';
const mockAuthors = ['Clive Staples Lewis'];
const mockPublishedDate = '2009';
const mockDescription =
  'Este livro apresenta as sete crônicas de Nárnia integralmente, num único volume.';

const mockBooks = {
  total: 2,
  itemsPerPage: 20,
  page: 0,
  data: [
    {
      id: 'I2QvPwAACAAJ',
      volumeInfo: {
        title: mockTitle,
        authors: mockAuthors,
        publishedDate: mockPublishedDate,
        description: mockDescription,
        imageLinks: {},
      },
    },
  ] as Array<Volume>,
};

const emptyBooks = {
  total: 0,
  itemsPerPage: 20,
  page: 0,
  data: [],
};
const fetchBooks = jest.fn();
const isFavorite = jest.fn();
const toggleFavorite = jest.fn();

const renderBookshelf = ({ refreshing = false, empty = false }) => {
  const books = empty ? emptyBooks : mockBooks;
  return render(
    <BooksContext.Provider
      value={
        {
          books,
          fetchBooks,
          refreshing,
          isFavorite,
          toggleFavorite,
        } as unknown as BooksContextData
      }>
      <Bookshelf />
    </BooksContext.Provider>,
  );
};

describe('bookshelf', () => {
  it('should render correctly', async () => {
    renderBookshelf({});
    expect(screen.toJSON()).toMatchSnapshot('bookshelf');
  });

  it('should render correctly when empty', async () => {
    renderBookshelf({ empty: true });
    expect(screen.toJSON()).toMatchSnapshot('empty bookshelf');
    expect(screen.getByText('There are no books to show.')).toBeTruthy();
  });

  it('should render skeleton correctly', () => {
    renderBookshelf({ refreshing: true });
    expect(screen.toJSON()).toMatchSnapshot('bookshelf skeleton');
  });

  it('should show title and authors', () => {
    renderBookshelf({});
    expect(screen.getByText(mockTitle)).toBeTruthy();
    expect(screen.getByText(mockAuthors.join(', '))).toBeTruthy();
  });
});
