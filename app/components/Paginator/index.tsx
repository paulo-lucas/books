import React from 'react';
import { Button, Icon, useTheme } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { usePagination } from '@app/hooks';

export const Paginator = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { page, onChangePage, totalPages, refreshing } = usePagination();

  const disabledPrev = refreshing || page === 0;
  const disabledNext = refreshing || page + 1 >= totalPages;

  const iconColor = (disabled: boolean) =>
    disabled ? theme.colors.grey2 : theme.colors.primary;

  if (totalPages === 0) {
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

      <Text style={styles.text}>
        Page {page + 1} of {totalPages}
      </Text>

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
    text: {
      color: colors.black,
    },
  });
