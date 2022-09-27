import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Image, Skeleton } from '@rneui/themed';
import { useBookDetails } from '@app/hooks';
import { getBestFromImageLinks } from '@app/utils/getBestImageFromImagelinks';
import BookInfoSkeleton from './BookInfoSkeleton';
import { VolumeInfo } from '@app/interfaces/volume';

export const BookInfo = () => {
  const { book, loading } = useBookDetails();
  const [descriptionOpen, setDescriptionoOpen] = useState<boolean>(false);

  const toggleDescription = () => setDescriptionoOpen(!descriptionOpen);

  if (loading) {
    return <BookInfoSkeleton />;
  }

  const info = book?.volumeInfo as VolumeInfo;
  const image = getBestFromImageLinks(info.imageLinks);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: image }}
            style={styles.image}
            placeholderStyle={styles.placeholder}
            PlaceholderContent={<Skeleton style={styles.placeholder} />}
          />
        </View>

        <Text style={styles.title}>{info.title}</Text>
        <Text style={styles.aditionalInfo}>
          By {info.authors.length ? info.authors.join(', ') : info.publisher}
        </Text>
        <Text style={styles.aditionalInfo}>
          {info.publishedDate?.replaceAll('-', '/')}
        </Text>

        <Text style={styles.subtitle}>
          {info.pageCount && `${info.pageCount} pages`}
        </Text>

        <Text style={styles.subtitle}>Categories</Text>
        {info.categories?.map((category, i) => (
          <Text key={i} style={styles.aditionalInfo}>
            {category}
          </Text>
        ))}

        <Text style={styles.subtitle}>Description</Text>
        <TouchableOpacity onPress={toggleDescription}>
          <Text
            numberOfLines={descriptionOpen ? 100 : 5}
            style={styles.description}>
            {info.description}
          </Text>
          <Text style={styles.toggleDescription}>
            {descriptionOpen ? 'Read less' : 'Read more'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  scrollview: {
    paddingHorizontal: 20,
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
    fontWeight: '600',
    marginTop: 20,
    fontSize: 24,
  },
  aditionalInfo: {
    fontSize: 14,
  },
  subtitle: {
    fontWeight: '500',
    marginTop: 20,
    fontSize: 18,
  },
  description: {
    fontSize: 16,
  },
  toggleDescription: {
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
