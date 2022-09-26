import React from 'react';
import { View } from 'react-native';

import { Bookshelf, SearchBar } from '@app/components';

function HomeScreen() {
  return (
    <View>
      <SearchBar />
      <Bookshelf />
    </View>
  );
}

export default HomeScreen;
