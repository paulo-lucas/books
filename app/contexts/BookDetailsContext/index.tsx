import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import type { BookDetailsContextData } from '@app/interfaces/bookDetailsContext';
import type { Volume } from '@app/interfaces/volume';
import { useFavorites } from '@app/hooks';
import type { RootStackParamList } from '@app/router/rootStackParams';
import { showVolume } from '@app/services';
import { Alert } from 'react-native';

export const BookDetailsContext = createContext({} as BookDetailsContextData);

export const BookDetailsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamList, 'Details'>>();

  const [book, setBook] = useState<Volume>();
  const [loading, setLoading] = useState<boolean>(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  const fetchBook = useCallback(async () => {
    if (!id) {
      return navigation.goBack();
    }

    try {
      setLoading(true);
      const { data } = await showVolume(id);
      setBook(data);
      setLoading(false);
    } catch (err) {
      Alert.alert('Could not retrieve book.');
      navigation.goBack();
    }
  }, [id, navigation]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  const contextData: BookDetailsContextData = {
    book,
    loading,
    isFavorite: () => isFavorite(id),
    toggleFavorite: () => toggleFavorite(id),
  };

  return (
    <BookDetailsContext.Provider value={contextData}>
      {children}
    </BookDetailsContext.Provider>
  );
};
