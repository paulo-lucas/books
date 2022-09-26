import React from 'react';
import { View } from 'react-native';
import { BooksProvider } from '@app/contexts/BooksContext';

import { Bookshelf, SearchBar } from '@app/components';

function HomeScreen() {
  return (
    <BooksProvider>
      <View>
        <SearchBar />
        <Bookshelf />
      </View>
    </BooksProvider>
  );
}

export default HomeScreen;
