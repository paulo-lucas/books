import React from 'react';
import { BookDetailsProvider } from '@app/contexts/BookDetailsContext';
import { BookInfo, FavoriteFAB } from '@app/components';

function HomeScreen() {
  return (
    <BookDetailsProvider>
      <BookInfo />
      <FavoriteFAB />
    </BookDetailsProvider>
  );
}

export default HomeScreen;
