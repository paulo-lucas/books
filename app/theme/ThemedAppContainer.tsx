import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';

const ThemedAppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const { background } = theme.colors;

  return (
    <NavigationContainer theme={theme as any}>
      <SafeAreaView style={styles(background).container}>
        {children}
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = (bg: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bg,
    },
  });

export default ThemedAppContainer;
