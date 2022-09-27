import React from 'react';
import { View } from 'react-native';

import { Bookshelf, SearchBar, Filters, Paginator } from '@app/components';

function HomeScreen() {
  return (
    <>
      <View>
        <SearchBar />
        <Paginator />
        <Bookshelf />
      </View>
      <Filters />
    </>
  );
}

export default HomeScreen;
