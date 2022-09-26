import React from 'react';
import { View } from 'react-native';

import { Bookshelf } from '@app/components';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Bookshelf />
    </View>
  );
}

export default HomeScreen;
