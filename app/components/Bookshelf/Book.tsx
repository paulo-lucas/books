import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Image, useTheme } from '@rneui/themed';
import FavoriteButton from './FavoriteButton';

interface BookProps {
  title: string;
  thumbnail: string;
  authors?: Array<string>;
  publisher: string;
}

const Book: React.FC<BookProps> = ({
  title,
  thumbnail,
  authors,
  publisher,
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const author = authors?.length ? authors[0] : publisher;
  thumbnail = thumbnail.replace('http://', 'https://');

  return (
    <TouchableOpacity style={styles.touchable}>
      <FavoriteButton
        style={styles.favorite}
        checked={true}
        onCheck={() => {}}
      />
      <View style={styles.container}>
        <View style={styles.shadow}>
          <Image
            source={{
              uri: thumbnail,
            }}
            containerStyle={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={2} style={styles.author}>
          {author}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = ({ colors }: any) =>
  StyleSheet.create({
    touchable: {
      width: '50%',
      position: 'relative',
    },
    favorite: {
      position: 'absolute',
      right: 30,
      zIndex: 1,
    },
    container: {
      width: '100%',
      paddingHorizontal: 10,
      paddingBottom: 20,
      paddingTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '90%',
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
    title: {
      fontSize: 15,
      fontWeight: '500',
      paddingLeft: 5,
      textAlign: 'center',
      marginTop: 10,
      color: colors.black,
    },
    author: {
      fontSize: 13,
      paddingLeft: 5,
      textAlign: 'center',
      color: colors.black,
    },
  });

export default Book;