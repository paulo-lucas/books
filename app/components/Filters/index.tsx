import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SpeedDial, useTheme } from '@rneui/themed';
import { useFilters } from '@app/hooks';

export const Filters = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const [open, setOpen] = useState<boolean>(false);
  const { toggleOrderBy, toggleFavoriteFilter, orderBy, filterByFavorites } =
    useFilters();

  const toggleOpen = () => setOpen(!open);

  return (
    <SpeedDial
      isOpen={open}
      buttonStyle={styles.primaryButton}
      icon={{
        name: 'filter',
        type: 'antdesign',
        color: '#fff',
      }}
      openIcon={{ name: 'close', color: '#fff' }}
      onOpen={toggleOpen}
      onClose={toggleOpen}>
      <SpeedDial.Action
        icon={{
          name: filterByFavorites ? 'bookmarks' : 'bookmark',
          type: 'ionicons',
          color: '#fff',
        }}
        title="Bookmarks"
        buttonStyle={
          filterByFavorites ? styles.secondaryButton : styles.primaryButton
        }
        onPress={toggleFavoriteFilter}
      />
      <SpeedDial.Action
        icon={{
          name: 'sort-ascending',
          type: 'material-community',
          color: '#fff',
        }}
        title={`Order by ${orderBy}`}
        buttonStyle={styles.primaryButton}
        onPress={toggleOrderBy}
      />
    </SpeedDial>
  );
};

const createStyles = ({ colors }: any) =>
  StyleSheet.create({
    primaryButton: {
      backgroundColor: colors.primary,
    },
    secondaryButton: {
      backgroundColor: colors.secondary,
    },
  });
