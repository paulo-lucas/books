import React from 'react';
import { Text } from 'react-native';
import { BookDetailsProvider } from '@app/contexts/BookDetailsContext';

function HomeScreen() {
  return (
    <BookDetailsProvider>
      <Text>askmsadlknadsklad</Text>
    </BookDetailsProvider>
  );
}

export default HomeScreen;
