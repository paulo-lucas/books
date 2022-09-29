import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const favoritesKey = '@books:favorites';

export const getFavorites = async (): Promise<Array<string>> => {
  try {
    const str = await AsyncStorage.getItem(favoritesKey);
    return str ? JSON.parse(str as string) : [];
  } catch (err) {
    Alert.alert('Error retrieving favorites.');
    throw err;
  }
};

export const storeFavorites = async (favoriteList: Array<string>) => {
  try {
    const value = JSON.stringify(favoriteList);
    const response = await AsyncStorage.setItem(favoritesKey, value);
    return response;
  } catch (err) {
    Alert.alert('Error updating favorites.');
    throw err;
  }
};
