import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { Filters } from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';

const toggleOrderBy = jest.fn();
const toggleFavoriteFilter = jest.fn();
const filterByFavorites = false;

const renderFilters = (orderBy = 'relevance') => {
  return render(
    <BooksContext.Provider
      value={
        {
          toggleOrderBy,
          toggleFavoriteFilter,
          orderBy,
          filterByFavorites,
        } as unknown as BooksContextData
      }>
      <Filters />
    </BooksContext.Provider>,
  );
};

describe('filters', () => {
  it('should render correctly', () => {
    renderFilters();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should display order by correctly', () => {
    const orderedByNewest = renderFilters('newest');
    const orderedByRelevance = renderFilters('relevance');

    expect(orderedByNewest.getByText('Order by newest')).toBeTruthy();
    expect(orderedByRelevance.getByText('Order by relevance')).toBeTruthy();
  });
});
