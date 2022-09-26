import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const useBooks = () => {
  const { books, fetchBooks, refreshing } = useContext(BooksContext);
  return { books, fetchBooks, refreshing };
};
