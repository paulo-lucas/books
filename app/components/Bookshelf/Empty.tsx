import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, useTheme } from '@rneui/themed';

const Empty = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Icon name="exclamationcircleo" type="antdesign" size={36} />
      <Text style={styles.text}>There are no books to show.</Text>
    </View>
  );
};

const createStyles = ({ colors }: any) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop: 10,
      fontSize: 18,
      fontWeight: '500',
      color: colors.black,
    },
  });

export default Empty;
