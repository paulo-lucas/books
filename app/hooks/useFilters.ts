import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const useFilters = () => {
  const { toggleOrderBy, toggleFavoriteFilter, orderBy, filterByFavorites } =
    useContext(BooksContext);
  return { toggleOrderBy, toggleFavoriteFilter, orderBy, filterByFavorites };
};
