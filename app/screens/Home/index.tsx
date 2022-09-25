import * as React from 'react';
import { View } from 'react-native';

import { ToggleTheme } from '@app/components';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ToggleTheme />
    </View>
  );
}

export default HomeScreen;
