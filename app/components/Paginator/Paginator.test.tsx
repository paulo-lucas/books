import 'react-native';
import React from 'react';
import { render, screen } from '../../../tests/test-utils';
import { Paginator } from './';
import { BooksContext } from '@app/contexts/BooksContext';
import { BooksContextData } from '@app/interfaces/booksContext';

const mockPage = 2;
const mockTotal = 15;
const mockItemsPerPage = 20;

const onChangePage = jest.fn();

const renderPaginator = ({ refreshing = false }) => {
  const books = {
    page: mockPage,
    total: mockTotal,
    itemsPerPage: mockItemsPerPage,
  };

  return render(
    <BooksContext.Provider
      value={
        { books, onChangePage, refreshing } as unknown as BooksContextData
      }>
      <Paginator />
    </BooksContext.Provider>,
  );
};

describe('paginator', () => {
  it('should render correctly', () => {
    renderPaginator({});
    expect(screen.toJSON()).toMatchSnapshot('paginator');
  });

  it('should render correctly when refreshing', () => {
    renderPaginator({ refreshing: true });
    expect(screen.toJSON()).toMatchSnapshot('paginator refreshing');
  });

  it('should display page and item range', () => {
    renderPaginator({});

    const offset = mockPage * mockItemsPerPage;

    expect(screen.getByText(`Page ${mockPage + 1}`)).toBeTruthy();
    expect(
      screen.getByText(`Items ${offset + 1}-${offset + mockTotal}`),
    ).toBeTruthy();
  });
});
