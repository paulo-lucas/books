import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const usePagination = () => {
  const {
    books: { page, total, itemsPerPage },
    onChangePage,
  } = useContext(BooksContext);

  return { page, onChangePage, totalPages: Math.ceil(total / itemsPerPage) };
};
