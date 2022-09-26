import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const useSearch = () => {
  const { searchText, onChangeSearch, onClearSearch } =
    useContext(BooksContext);
  return { searchText, onChangeSearch, onClearSearch };
};
