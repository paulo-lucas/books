import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { ToggleTheme } from '@app/components';

import Home from '@app/screens/Home';

const Stack = createNativeStackNavigator();

function Router() {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Books',
        headerTitleAlign: 'left', //moved this from headerStyle property
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerRight: ToggleTheme,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Router;
