import React from 'react';
import { View } from 'react-native';
import { BooksProvider } from '@app/contexts/BooksContext';

import { Bookshelf, SearchBar, Filters, Paginator } from '@app/components';

function HomeScreen() {
  return (
    <BooksProvider>
      <View>
        <SearchBar />
        <Paginator />
        <Bookshelf />
      </View>
      <Filters />
    </BooksProvider>
  );
}

export default HomeScreen;
