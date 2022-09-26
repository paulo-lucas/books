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

interface FetchBooksArgs {
  page: number;
  searchOverride?: string;
  orderByOverride?: 'newest' | 'relevance';
  filterByFavoritesOverride?: boolean;
}

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

  const toggleFavoriteFilter = () => {
    setFilterByFavorites(!filterByFavorites);
    refreshBooks(0, orderBy, !filterByFavorites);
  };

  const toggleOrderBy = () => {
    const toggledOrderBy = orderBy === 'newest' ? 'relevance' : 'newest';
    setOrderBy(toggledOrderBy);
    refreshBooks(0, toggledOrderBy);
  };

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

  const fetchBooks = useCallback(
    async ({
      page,
      searchOverride,
      filterByFavoritesOverride,
      orderByOverride,
    }: FetchBooksArgs) => {
      const search = searchOverride ?? searchText;

      if (!search) {
        return onClearSearch();
      }

      const identifier =
        filterByFavoritesOverride ?? filterByFavorites ? favorites : [];
      const q = { search, identifier };
      const { itemsPerPage: maxResults } = books;
      const startIndex = page * maxResults;

      try {
        setRefreshing(true);
        const { data } = await searchVolumes({
          q,
          startIndex,
          maxResults,
          orderBy: orderByOverride ?? orderBy,
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
    debounceSearch({ page: 0, searchFromDebounce: text });
  };

  const refreshBooks = (
    page: number = 0,
    orderByOverride?: 'relevance' | 'newest',
    filterByFavoritesOverride?: boolean,
  ) => {
    fetchBooks({ page, filterByFavoritesOverride, orderByOverride });
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
