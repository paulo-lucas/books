import type { Volume } from './volume';

export interface BooksState {
  total: number;
  itemsPerPage: number;
  page: number;
  data: Array<Volume>;
}

export interface BooksContextData {
  searchText: string;
  onChangeSearch(text: string): void;
  books: BooksState;
  refreshing: boolean;
  toggleOrderBy(): void;
  toggleFavoriteFilter(): void;
  toggleFavorite(isbn: string): void;
  isFavorite(favorite: string): boolean;
  onClearSearch(): void;
  refreshBooks(page?: number): void;
}

export interface UpdatePayload {
  type: 'update';
  page?: number;
  total: number;
  data: Array<Volume>;
}

export interface ClearPayload {
  type: 'clear';
}
