import { useContext } from 'react';
import { BooksContext } from '@app/contexts/BooksContext';

export const useFavorites = () => {
  const { toggleFavorite, isFavorite } = useContext(BooksContext);
  return { toggleFavorite, isFavorite };
};
