import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { Book as MemoizedBook } from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';

const Book = (MemoizedBook as any).type as typeof MemoizedBook;
const isFavorite = jest.fn(() => true);
const toggleFavorite = jest.fn();

const mockTitle = 'As crônicas de Nárnia';
const mockAuthors = ['Clive Staples Lewis'];

const renderBook = (refreshing = false) =>
  render(
    <BooksContext.Provider
      value={{ isFavorite, toggleFavorite } as unknown as BooksContextData}>
      <Book
        refreshing={refreshing}
        identifier={'abcdefg1234567'}
        title={mockTitle}
        authors={mockAuthors}
      />
    </BooksContext.Provider>,
  );

describe('book', () => {
  it('should render correctly', async () => {
    renderBook();
    expect(screen.toJSON()).toMatchSnapshot('book');
  });

  it('should render skeleton correctly', () => {
    renderBook(true);
    expect(screen.toJSON()).toMatchSnapshot('book skeleton');
  });

  it('should show title and authors', () => {
    renderBook();
    expect(screen.getByText(mockTitle)).toBeTruthy();
    expect(screen.getByText(mockAuthors.join(', '))).toBeTruthy();
  });
});
