import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { createTheme } from '@rneui/themed';

const mockTheme = { colors: createTheme({}).lightColors };
const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock('axios', () => {
  const actualAxios = jest.requireActual('axios');
  return {
    ...actualAxios,
    create: () => actualAxios,
  };
});

jest.mock('@react-navigation/native', () => {
  const actualRNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...actualRNavigation,
    useRoute: () => ({
      params: {},
    }),
    useNavigation: () => ({
      navigation: { goBack: mockGoBack, navigate: mockNavigate },
    }),
  };
});

jest.mock('@rneui/themed', () => {
  const actualRNE = jest.requireActual('@rneui/themed');
  return {
    ...actualRNE,
    useTheme: () => ({
      theme: mockTheme,
    }),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@app/services', () => ({
  searchVolumes: () => ({
    data: {
      items: [
        {
          id: '2Y3iBgAAQBAJ',
          volumeInfo: {
            title: 'Descubra Nárnia',
            authors: ['Christin Ditchfield'],
            publisher: 'RBC Publicações',
            publishedDate: '2010-04-02',
            description: 'O Leão, a Feiticeira e o Guarda-Roupas',

            pageCount: 256,
            categories: ['Religion'],
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=2Y3iBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=2Y3iBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
          },
        },
        {
          id: 'I2QvPwAACAAJ',
          volumeInfo: {
            title: 'As crônicas de Nárnia',
            authors: ['Clive Staples Lewis'],
            publishedDate: '2009',
            description:
              'Este livro apresenta as sete crônicas de Nárnia integralmente, num único volume.',
          },
        },
      ],
    },
  }),
  showVolume: () => ({
    data: {
      id: '2Y3iBgAAQBAJ',
      volumeInfo: {
        title: 'Descubra Nárnia',
        authors: ['Christin Ditchfield'],
        publisher: 'RBC Publicações',
        publishedDate: '2010-04-02',
        description: 'O Leão, a Feiticeira e o Guarda-Roupas',

        pageCount: 256,
        categories: ['Religion'],
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=2Y3iBgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=2Y3iBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
      },
    },
  }),
  getFavorites: () => [],
  storeFavorites: () => {},
}));
