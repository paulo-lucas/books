import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const usePagination = () => {
  const {
    books: { page, total, itemsPerPage },
    onChangePage,
    refreshing,
  } = useContext(BooksContext);

  return {
    page,
    onChangePage,
    refreshing,
    total,
    itemsPerPage,
  };
};
