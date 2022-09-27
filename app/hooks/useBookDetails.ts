import { useContext } from 'react';
import { BookDetailsContext } from '@app/contexts/BookDetailsContext';

export const useBookDetails = () => {
  const { book, loading, isFavorite, toggleFavorite } =
    useContext(BookDetailsContext);
  return { book, loading, isFavorite, toggleFavorite };
};
