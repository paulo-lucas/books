import React, {
  createContext,
  useState,
  useReducer,
  PropsWithChildren,
} from 'react';
import { BooksContextData } from '@app/interfaces/booksContext';
import { booksReducer, booksInitialState } from '@app/states/BooksReducer';
import { useDebounce } from '@app/hooks';
import { searchVolumes } from '@app/services';
import { Alert } from 'react-native';
import { useCallback } from 'react';

export const BooksContext = createContext({} as BooksContextData);

export const BooksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, booksInitialState);
  const [searchText, setSearchText] = useState<string>('');
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [orderBy, setOrderBy] = useState<'relevance' | 'newest'>('relevance');
  const [favorites, setFavorites] = useState<Array<string>>([]);
  const [filterByFavorites, setFilterByFavorites] = useState<boolean>(false);

  const onClearSearch = () => dispatch({ type: 'clear' });

  const toggleFavorite = () => setFilterByFavorites(!filterByFavorites);

  const isFavorite = (isbn: string) => favorites.includes(isbn);

  const fetchBooks = useCallback(
    async (page: number = 0) => {
      if (!searchText) {
        return onClearSearch();
      }

      const isbn = filterByFavorites ? favorites : [];
      const q = { search: searchText, isbn };
      const { itemsPerPage: maxResults } = books;
      const startIndex = page * maxResults;

      try {
        setRefreshing(true);
        const { data } = await searchVolumes({
          q,
          startIndex,
          maxResults,
          orderBy,
        });

        dispatch({ type: 'update', total: data.totalItems, data: data.items });
        setRefreshing(false);
      } catch (err) {
        Alert.alert('Could not retrieve books.');
      }
    },
    [books, favorites, filterByFavorites, orderBy, searchText],
  );

  const debounceSearch = useDebounce(fetchBooks, 1000);

  const onChangeSearch = (text: string) => {
    setSearchText(text);
    debounceSearch();
  };

  const refreshBooks = (page?: number) => {
    fetchBooks(page);
  };

  const contextData: BooksContextData = {
    books,
    refreshBooks,
    refreshing,
    searchText,
    onChangeSearch,
    onClearSearch,
    toggleFavorite,
    isFavorite,
  };

  return (
    <BooksContext.Provider value={contextData}>
      {children}
    </BooksContext.Provider>
  );
};
