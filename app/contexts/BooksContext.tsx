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
    const favoritesFromStorage = await getFavorites();
    setFavorites(favoritesFromStorage);
  }, []);

  // Handle every request to list books, based on states
  const fetchBooks = useCallback(async () => {
    if (!searchTextDebounce && (!filterByFavorites || !favorites.length)) {
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
        orderBy,
        filter: 'partial',
        printType: 'books',
      };

      if (JSON.stringify(request) === books.request) {
        return;
      }

      setRefreshing(true);
      const { data } = await searchVolumes(request);

      const items = filterByFavorites
        ? data.items?.filter(item => favorites.includes(item.id))
        : data.items;

      dispatch({
        type: 'update',
        total: data.items?.length ?? 0,
        distinctTotal: items.length,
        data: items ?? [],
        page: page,
        request: JSON.stringify(request),
      });

      setRefreshing(false);
    } catch (err) {
      onClearSearch();
      setFilterByFavorites(false);
      Alert.alert('Could not retrieve books.');
    }
  }, [books, favorites, filterByFavorites, orderBy, searchTextDebounce]);

  const onClearSearch = () => dispatch({ type: 'clear' });

  const toggleOrderBy = () =>
    setOrderBy(orderBy === 'newest' ? 'relevance' : 'newest');

  // Toggle the filter, will make table show only favorited books
  const toggleFavoriteFilter = () => setFilterByFavorites(!filterByFavorites);

  // Toggle single book favorited / not favorited
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

  const isFavorite = (identifier: string) => favorites.includes(identifier);

  const debounceSearch = useDebounce(setSearchTextDebounce, 500);

  const onChangeSearch = (text: string) => {
    setSearchText(text);
    debounceSearch(text);
  };

  const onChangePage = (page: number) => dispatch({ type: 'moveToPage', page });

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
    onChangePage,
  };

  return (
    <BooksContext.Provider value={contextData}>
      {children}
    </BooksContext.Provider>
  );
};
