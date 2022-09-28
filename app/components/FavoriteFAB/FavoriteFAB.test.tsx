import 'react-native';
import React from 'react';
import { fireEvent, render, screen } from '../../../tests/test-utils';
import { FavoriteFAB } from './';
import { BookDetailsContext } from '@app/contexts/BookDetailsContext';
import { BookDetailsContextData } from '@app/interfaces/bookDetailsContext';

const isFavorite = jest.fn();

const renderFAB = (loading = false, toggleFavorite: Function = jest.fn()) => {
  return render(
    <BookDetailsContext.Provider
      value={
        {
          loading,
          isFavorite,
          toggleFavorite,
        } as unknown as BookDetailsContextData
      }>
      <FavoriteFAB />
    </BookDetailsContext.Provider>,
  );
};

describe('favorite fab', () => {
  it('should render correctly', async () => {
    renderFAB();
    expect(screen.toJSON()).toMatchSnapshot('favorite fab');
  });

  it('should render correctly when loading', async () => {
    renderFAB(true);
    expect(screen.toJSON()).toMatchSnapshot('favorite fab not visible');
  });

  it('should trigger toggle favorite', async () => {
    const mockToggleFavorite = jest.fn();
    renderFAB(false, mockToggleFavorite);

    fireEvent(screen.getByTestId('favorite-button'), 'onPress');

    expect(mockToggleFavorite).toHaveBeenCalled();
  });
});
