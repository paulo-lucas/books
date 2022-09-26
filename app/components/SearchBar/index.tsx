import React from 'react';
import { SearchBar as RNESearchBar, useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { useSearch } from '@app/hooks';

export const SearchBar = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { searchText, onChangeSearch, onClearSearch } = useSearch();

  return (
    <RNESearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      placeholder="Search books"
      value={searchText}
      onChangeText={onChangeSearch}
      onClear={onClearSearch}
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
