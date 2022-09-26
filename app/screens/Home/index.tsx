import React from 'react';
import { View } from 'react-native';
import { BooksProvider } from '@app/contexts/BooksContext';

import { Bookshelf, SearchBar, Filters } from '@app/components';

function HomeScreen() {
  return (
    <BooksProvider>
      <View>
        <SearchBar />
        <Bookshelf />
      </View>
      <Filters />
    </BooksProvider>
  );
}

export default HomeScreen;
