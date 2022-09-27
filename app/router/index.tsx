import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { ToggleTheme } from '@app/components';
import type { RootStackParamList } from './rootStackParams';

import Home from '@app/screens/Home';
import Details from '@app/screens/Details';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Router;
