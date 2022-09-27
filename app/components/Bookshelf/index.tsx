import React from 'react';
import { FlatList } from 'react-native';
import { Volume } from '@app/interfaces/volume';
import Book from './Book';
import BookSkeleton from './BookSkeleton';
import Empty from './Empty';
import { useBooks } from '@app/hooks';

interface BookshelfProps {
  volumes?: Array<Volume>;
}

interface RenderItemArgs {
  item: Volume;
}

export const Bookshelf: React.FC<BookshelfProps> = () => {
  const { books, fetchBooks, refreshing } = useBooks();

  const renderItem = ({ item }: RenderItemArgs) => {
    return (
      <Book
        title={item.volumeInfo.title}
        publisher={item.volumeInfo.publisher}
        thumbnail={item.volumeInfo.imageLinks.thumbnail}
        authors={item.volumeInfo.authors}
        identifier={item.id}
      />
    );
  };

  const renderSkeletonItem = () => {
    return <BookSkeleton />;
  };

  return (
    <FlatList
      refreshing={refreshing}
      data={
        refreshing ? ([{}, {}, {}, {}, {}, {}] as Array<Volume>) : books.data
      }
      renderItem={refreshing ? renderSkeletonItem : renderItem}
      keyExtractor={(_, id) => String(id)}
      ListEmptyComponent={Empty}
      numColumns={2}
      onRefresh={fetchBooks}
    />
  );
};
