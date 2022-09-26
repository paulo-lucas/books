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
import { VolumeSearchRequest } from '@app/interfaces/volume';

export const BooksContext = createContext({} as BooksContextData);

export const BooksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [books, dispatch] = useReducer(booksReducer, booksInitialState);
  const [searchText, setSearchText] = useState<string>('');
  const [searchTextDebounce, setSearchTextDebounce] = useState<string>('');
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

  const isFavorite = (identifier: string) => favorites.includes(identifier);

  const toggleFavorite = (identifier: string) => {
    let updatedFavorites;

    if (favorites.includes(identifier)) {
      updatedFavorites = favorites.filter(fav => fav !== identifier);
    } else {
      updatedFavorites = [...favorites, identifier];
    }

    updatedFavorites = updatedFavorites.filter(fav => !!fav);

    setFavorites(updatedFavorites);
    storeFavorites(updatedFavorites);
  };

  const fetchBooks = useCallback(async () => {
    if (!searchTextDebounce) {
      return onClearSearch();
    }

    const identifier = filterByFavorites ? favorites : [];
    const q = { search: searchTextDebounce, identifier };
    const { itemsPerPage: maxResults, page } = books;
    const startIndex = page * maxResults;

    try {
      const request: VolumeSearchRequest = {
        q,
        startIndex,
        maxResults,
        filter: 'partial',
        orderBy,
      };

      if (JSON.stringify(request) === books.request) {
        return;
      }

      setRefreshing(true);
      const { data } = await searchVolumes(request);

      dispatch({
        type: 'update',
        total: data.totalItems,
        data: data.items ?? [],
        request: JSON.stringify(request),
      });

      setRefreshing(false);
    } catch (err) {
      Alert.alert('Could not retrieve books.');
    }
  }, [books, favorites, filterByFavorites, orderBy, searchTextDebounce]);

  const debounceSearch = useDebounce(setSearchTextDebounce, 500);

  const onChangeSearch = (text: string) => {
    setSearchText(text);
    debounceSearch(text);
  };

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const contextData: BooksContextData = {
    books,
    refreshing,
    searchText,
    onChangeSearch,
    onClearSearch,
    fetchBooks,
    toggleOrderBy,
    toggleFavoriteFilter,
    orderBy,
    filterByFavorites,
    isFavorite,
    toggleFavorite,
  };

  return (
    <BooksContext.Provider value={contextData}>
      {children}
    </BooksContext.Provider>
  );
};
