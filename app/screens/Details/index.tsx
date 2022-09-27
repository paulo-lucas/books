import React from 'react';
import { BookDetailsProvider } from '@app/contexts/BookDetailsContext';
import { BookInfo } from '@app/components';

function HomeScreen() {
  return (
    <BookDetailsProvider>
      <BookInfo />
    </BookDetailsProvider>
  );
}

export default HomeScreen;
