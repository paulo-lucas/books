import React from 'react';
import { SearchBar as RNESearchBar, useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export const SearchBar = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <RNESearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      placeholder="Search books"
    />
  );
};

const createStyles = ({ colors }: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      paddingVertical: 20,
      paddingHorizontal: 15,
    },
    inputContainer: {
      backgroundColor: colors.surface,
    },
    input: {
      backgroundColor: colors.surface,
    },
  });
