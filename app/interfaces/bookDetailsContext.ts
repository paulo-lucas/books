import type { Volume } from './volume';

export interface BookDetailsContextData {
  book?: Volume;
  toggleFavorite(): void;
  isFavorite(): boolean;
  loading: boolean;
}
