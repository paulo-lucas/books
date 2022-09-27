import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/themed';

const BookInfoSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.image} />
      <Skeleton style={styles.title} />
      <Skeleton style={styles.author} />
      <Skeleton style={styles.description} />
      <Skeleton style={styles.description} />
      <Skeleton style={styles.description} />
      <Skeleton style={styles.description} />
      <Skeleton style={styles.description} />
      <Skeleton style={styles.descriptionEnd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 76 / 130,
    alignSelf: 'center',
  },
  title: {
    marginTop: 20,
    height: 24,
    width: '85%',
  },
  author: {
    marginTop: 10,
    marginBottom: 20,
    height: 18,
    width: '60%',
  },
  description: {
    marginTop: 5,
    height: 20,
    width: '100%',
  },
  descriptionEnd: {
    marginTop: 5,
    height: 20,
    width: '70%',
  },
});

export default BookInfoSkeleton;
