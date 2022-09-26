import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const useBooks = () => {
  const { books, refreshBooks, refreshing } = useContext(BooksContext);
  return { books, refreshBooks, refreshing };
};
