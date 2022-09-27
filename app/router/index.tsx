import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@rneui/themed';
import { BackButton, ToggleTheme } from '@app/components';
import type { RootStackParamList } from './rootStackParams';
import { BooksProvider } from '@app/contexts/BooksContext';

import Home from '@app/screens/Home';
import Details from '@app/screens/Details';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <BooksProvider>
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
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerLeft: BackButton,
          }}
        />
      </Stack.Navigator>
    </BooksProvider>
  );
}

export default Router;
