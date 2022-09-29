import 'react-native';
import React, { ReactElement } from 'react';
import {
  render,
  RenderOptions,
  screen,
  act,
  fireEvent,
} from '../../../tests/test-utils';
import { BooksProvider } from './';
import { Bookshelf, SearchBar } from '@app/components';
import Home from '@app/screens/Home';
jest.useFakeTimers();

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
}));

const customRender = (ui: ReactElement, options: RenderOptions = {}) => {
  return render(<BooksProvider>{ui}</BooksProvider>, options);
};

describe('books context', () => {
  it('should render correctly with consumer', async () => {
    customRender(<Home />);
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should render empty bookshelf', () => {
    customRender(<Bookshelf />);
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText('There are no books to show.')).toBeTruthy();
  });

  it('should handle searchbar', async () => {
    const mockText = 'something';
    customRender(<SearchBar />);
    fireEvent(
      screen.getByPlaceholderText('Search books'),
      'onChangeText',
      mockText,
    );

    const result = await screen.findByDisplayValue(mockText);
    expect(result).toBeTruthy();
  });
});
