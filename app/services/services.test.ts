import { getFavorites, storeFavorites } from './favorites';
import { searchVolumes, showVolume } from './volumes';
import { BooksUrl } from './constants/books';
import { VolumeSearchRequest } from '@app/interfaces/volume';

const mockUrl = BooksUrl.VOLUME;
const mockArray: string[] = [];

const mockId = '2Y3iBgAAQBAJ';
const mockVolume = {
  id: mockId,
  volumeInfo: {
    title: 'Descubra Nárnia',
    authors: ['Christin Ditchfield'],
    publisher: 'RBC Publicações',
    publishedDate: '2010-04-02',
    description: 'O Leão, a Feiticeira e o Guarda-Roupas',

    pageCount: 256,
    categories: ['Religion'],
  },
};

jest.mock('./http', () => ({
  get: (...args: any[]) => {
    if (args[0] === mockUrl) {
      return {
        status: 200,
        data: {
          kind: 'books#volumes',
          totalItems: 1,
          items: [mockVolume],
        },
      };
    }

    return {
      status: 200,
      data: mockVolume,
    };
  },
}));

describe('favorites service', () => {
  it('should retrieve favorites', async () => {
    const result = await getFavorites();
    expect(result).toEqual(mockArray);
  });

  it('should store favorites', async () => {
    const result = await storeFavorites(mockArray);
    expect(result).toBe(null);
  });
});

describe('volumes service', () => {
  it('should search volumes', async () => {
    const result = await searchVolumes({
      q: {},
    } as VolumeSearchRequest);

    expect(result.data.items[0]).toEqual(mockVolume);
  });

  it('should show volume', async () => {
    const result = await showVolume(mockId);

    expect(result.data).toEqual(mockVolume);
  });
});
