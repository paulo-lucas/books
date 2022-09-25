import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@app/screens/Home';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Router;
