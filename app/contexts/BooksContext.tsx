import React, {
  createContext,
  useState,
  useReducer,
  PropsWithChildren,
  useEffect,
} from 'react';
import { BooksContextData } from '@app/interfaces/booksContext';
import { booksReducer, booksInitialState } from '@app/states/BooksReducer';
import { useDebounce } from '@app/hooks';
import { searchVolumes, storeFavorites, getFavorites } from '@app/services';
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

  const fetchFavorites = useCallback(async () => {
    const storageFavorites = await getFavorites();
    setFavorites(storageFavorites);
  }, []);

  const onClearSearch = () => dispatch({ type: 'clear' });

  const toggleFavoriteFilter = () => setFilterByFavorites(!filterByFavorites);

  const toggleOrderBy = () =>
    setOrderBy(orderBy === 'newest' ? 'relevance' : 'newest');

  const isFavorite = (isbn: string) => favorites.includes(isbn);

  const toggleFavorite = (isbn: string) => {
    let updatedFavorites;

    if (favorites.includes(isbn)) {
      updatedFavorites = favorites.filter(fav => fav !== isbn);
    } else {
      updatedFavorites = [...favorites, isbn];
    }

    setFavorites(updatedFavorites);
    storeFavorites(updatedFavorites);
  };

  const fetchBooks = useCallback(
    async (page: number, searchFromDebounce?: string) => {
      if (!searchText && !searchFromDebounce) {
        return onClearSearch();
      }

      const search = searchFromDebounce ?? searchText;
      const isbn = filterByFavorites ? favorites : [];
      const q = { search, isbn };
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

        dispatch({
          type: 'update',
          total: data.totalItems,
          data: data.items ?? [],
        });

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
    debounceSearch(0, text);
  };

  const refreshBooks = (page: number = 0) => {
    fetchBooks(page);
  };

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const contextData: BooksContextData = {
    books,
    refreshBooks,
    refreshing,
    searchText,
    onChangeSearch,
    onClearSearch,
    toggleOrderBy,
    toggleFavoriteFilter,
    isFavorite,
    toggleFavorite,
  };

  return (
    <BooksContext.Provider value={contextData}>
      {children}
    </BooksContext.Provider>
  );
};
