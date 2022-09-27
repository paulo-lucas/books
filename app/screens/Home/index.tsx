import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Bookshelf, SearchBar, Filters, Paginator } from '@app/components';

function HomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <SearchBar />
        <Paginator />
        <Bookshelf />
      </View>
      <Filters />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HomeScreen;
