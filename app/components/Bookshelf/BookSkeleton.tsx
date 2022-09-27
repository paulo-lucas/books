import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';

const Book = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={[styles.shadow, styles.image]} />
      <View style={styles.titleWrapper}>
        <Skeleton style={styles.title} />
      </View>
      <View style={styles.authorWrapper}>
        <Skeleton style={styles.author} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 5,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 76 / 130,
    borderRadius: 5,
    elevation: 20,
  },
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  titleWrapper: {
    marginTop: 5,
    width: '80%',
  },
  title: {
    height: 20,
  },
  authorWrapper: {
    marginTop: 5,
    width: '70%',
  },
  author: {
    height: 15,
  },
});

export default React.memo(Book);
