import type { Volume } from './volume';

export interface BooksState {
  total: number;
  itemsPerPage: number;
  page: number;
  data: Array<Volume>;
  request?: string;
  distinctTotal?: number;
}

export interface BooksContextData {
  searchText: string;
  onChangeSearch(text: string): void;
  books: BooksState;
  refreshing: boolean;
  toggleOrderBy(): void;
  toggleFavoriteFilter(): void;
  toggleFavorite(identifier: string): void;
  isFavorite(favorite: string): boolean;
  onClearSearch(): void;
  fetchBooks(): void;
  orderBy: string;
  filterByFavorites: boolean;
  onChangePage(page: number): void;
}

export interface UpdatePayload {
  type: 'update';
  page?: number;
  total: number;
  distinctTotal?: number;
  request: string;
  data: Array<Volume>;
}

export interface ClearPayload {
  type: 'clear';
}

export interface MoveToPagePayload {
  type: 'moveToPage';
  page: number;
}
