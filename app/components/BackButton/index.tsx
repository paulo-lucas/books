import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export const BackButton = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Icon
      name="arrowleft"
      type="antdesign"
      color={theme.colors.primary}
      onPress={navigation.goBack}
      size={24}
      style={styles.arrow}
    />
  );
};

const styles = StyleSheet.create({
  arrow: {
    marginRight: 20,
    padding: 10,
  },
});
