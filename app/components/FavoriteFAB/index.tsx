import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, useTheme } from '@rneui/themed';
import { useBookDetails } from '@app/hooks';

export const FavoriteFAB = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { isFavorite, toggleFavorite, loading } = useBookDetails();

  const iconColor = isFavorite() ? theme.colors.success : theme.colors.black;

  return (
    <FAB
      visible={!loading}
      buttonStyle={styles.button}
      onPress={toggleFavorite}
      icon={{ name: 'bookmark', type: 'ionicons', color: iconColor }}
      size="large"
      placement="right"
    />
  );
};

const createStyles = ({ colors }: any) =>
  StyleSheet.create({
    button: {
      backgroundColor: colors.surface,
    },
  });
