import React from 'react';
import { Button, Icon, useTheme } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { usePagination } from '@app/hooks';

export const Paginator = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { page, onChangePage, total, itemsPerPage, refreshing } =
    usePagination();

  const disabledPrev = refreshing || page === 0;
  const disabledNext = refreshing || total < itemsPerPage;

  const iconColor = (disabled: boolean) =>
    disabled ? theme.colors.grey3 : theme.colors.primary;

  if (total === 0) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Button
        type="clear"
        disabled={disabledPrev}
        onPress={() => onChangePage(page - 1)}>
        <Icon name="arrow-left" color={iconColor(disabledPrev)} />
        Prev
      </Button>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>Page {page + 1}</Text>
        <Text style={styles.text}>
          {page * itemsPerPage + 1}-{(page + 1) * itemsPerPage}
        </Text>
      </View>

      <Button
        type="clear"
        disabled={disabledNext}
        onPress={() => onChangePage(page + 1)}>
        Next
        <Icon name="arrow-right" color={iconColor(disabledNext)} />
      </Button>
    </View>
  );
};

const createStyles = ({ colors }: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingBottom: 20,
    },
    textWrapper: {
      alignItems: 'center',
    },
    text: {
      color: colors.black,
    },
  });
