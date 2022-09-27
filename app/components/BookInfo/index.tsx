import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Image, Skeleton } from '@rneui/themed';
import { useBookDetails } from '@app/hooks';
import { getBestFromImageLinks } from '@app/utils/getBestImageFromImagelinks';
import BookInfoSkeleton from './BookInfoSkeleton';

export const BookInfo = () => {
  const { book, isFavorite, loading, toggleFavorite } = useBookDetails();

  if (loading) {
    return <BookInfoSkeleton />;
  }

  const image = getBestFromImageLinks(book?.volumeInfo.imageLinks);
  console.log(image);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          placeholderStyle={styles.placeholder}
          PlaceholderContent={<Skeleton style={styles.placeholder} />}
        />
      </View>

      <Text style={styles.title}>{book?.volumeInfo.title}</Text>
      <Text style={styles.author}>{book?.volumeInfo.authors.join(', ')}</Text>
      <Text style={styles.description}>{book?.volumeInfo.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 76 / 130,
  },
  placeholder: {
    width: '100%',
    height: '100%',
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    width: '85%',
  },
  author: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    width: '60%',
  },
  description: {
    marginTop: 5,
    fontSize: 20,
    width: '100%',
  },
});
