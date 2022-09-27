import React, { createContext, PropsWithChildren, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { BooksDetailsContextData } from '@app/interfaces/bookDetailsContext';
import type { Volume } from '@app/interfaces/volume';
import { useFavorites } from '@app/hooks';
import type { RootStackParamList } from '@app/router/rootStackParams';

export const BookDetailsContext = createContext({} as BooksDetailsContextData);

export const BookDetailsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamList, 'Details'>>();

  const [book, setBook] = useState<Volume>();
  // const { isFavorite, toggleFavorite } = useFavorites();

  const contextData: BooksDetailsContextData = {};

  return (
    <BookDetailsContext.Provider value={contextData}>
      {children}
    </BookDetailsContext.Provider>
  );
};
