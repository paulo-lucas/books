import 'react-native';
import React from 'react';
import { fireEvent, render, screen, act } from '../../../tests/test-utils';
import { BookInfo } from './';
import { BookDetailsContext } from '@app/contexts/BookDetailsContext';
import { Volume } from '@app/interfaces/volume';

const mockTitle = 'As crônicas de Nárnia';
const mockAuthors = ['Clive Staples Lewis'];
const mockPublishedDate = '2009';
const mockDescription =
  'Este livro apresenta as sete crônicas de Nárnia integralmente, num único volume.';

const book = {
  id: 'I2QvPwAACAAJ',
  volumeInfo: {
    title: mockTitle,
    authors: mockAuthors,
    publishedDate: mockPublishedDate,
    description: mockDescription,
  },
} as Volume;
const isFavorite = jest.fn(() => true);
const toggleFavorite = jest.fn();

const renderBookInfo = (loading = false) =>
  render(
    <BookDetailsContext.Provider
      value={{ book, isFavorite, toggleFavorite, loading }}>
      <BookInfo />
    </BookDetailsContext.Provider>,
  );

describe('book info', () => {
  it('should render correctly', async () => {
    renderBookInfo();
    expect(screen.toJSON()).toMatchSnapshot('book info');
  });

  it('should render skeleton correctly', () => {
    renderBookInfo(true);
    expect(screen.toJSON()).toMatchSnapshot('book info skeleton');
  });

  it('should show book fields', () => {
    renderBookInfo();
    expect(screen.getByText(mockTitle)).toBeTruthy();
    expect(screen.getByText('By ' + mockAuthors.join(', '))).toBeTruthy();
    expect(screen.getByText(mockPublishedDate)).toBeTruthy();

    act(() => {
      fireEvent.press(screen.getByText('Read more'));
    });

    expect(screen.getByText(mockDescription)).toBeTruthy();
  });
});
