import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@rneui/themed';

const ThemedAppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <NavigationContainer theme={theme as any}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </NavigationContainer>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });

export default ThemedAppContainer;
