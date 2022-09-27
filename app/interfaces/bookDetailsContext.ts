import type { Volume } from './volume';

export interface BooksDetailsContextData {
  book: Volume;
  toggleFavorite(): void;
  isFavorite(): boolean;
}
