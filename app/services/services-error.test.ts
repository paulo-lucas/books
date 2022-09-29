import { getFavorites, storeFavorites } from './favorites';

const mockArray: string[] = [];

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: () => {
    throw new Error('get error');
  },
  setItem: () => {
    throw new Error('set error');
  },
}));

describe('error favorites service', () => {
  it('should throw error', async () => {
    try {
      await getFavorites();

      // Fail test if above function doesn't throw anything.
      expect(true).toBe(false);
    } catch (err) {
      expect((err as Error).message).toBe('get error');
    }

    try {
      await storeFavorites(mockArray);

      // Fail test if above function doesn't throw anything.
      expect(true).toBe(false);
    } catch (err) {
      expect((err as Error).message).toBe('set error');
    }
  });
});
