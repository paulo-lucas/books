import React from 'react';
import { FlatList } from 'react-native';
import { Volume } from '@app/interfaces/volume';
import Book from './Book';
import Empty from './Empty';
import { useBooks } from '@app/hooks';

interface BookshelfProps {
  volumes?: Array<Volume>;
}

interface RenderItemArgs {
  item: Volume;
}

export const Bookshelf: React.FC<BookshelfProps> = () => {
  const { books } = useBooks();

  const renderItem = ({ item }: RenderItemArgs) => {
    const identifier =
      item.volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')
        ?.identifier ??
      item.volumeInfo.industryIdentifiers?.[0].identifier ??
      item.id;

    return (
      <Book
        title={item.volumeInfo.title}
        publisher={item.volumeInfo.publisher}
        thumbnail={item.volumeInfo.imageLinks?.thumbnail}
        authors={item.volumeInfo.authors}
        identifier={identifier}
      />
    );
  };

  return (
    <FlatList
      data={books.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListEmptyComponent={Empty}
      numColumns={2}
    />
  );
};
