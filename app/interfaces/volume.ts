export interface VolumeSearchRequest {
  q: VolumeSearchQuery;
  startIndex: number;
  maxResults: number;
  orderBy: 'newest' | 'relevance';
}

export interface VolumeSearchResponse {
  kind: string;
  totalItems: number;
  items: Array<Volume>;
}

export interface VolumeSearchQuery {
  search?: string;
  title?: string;
  author?: string;
  publisher?: string;
  isbn?: Array<string>;
}

export interface VolumeInfo {
  title: string;
  authors: Array<String>;
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  categories: Array<string>;
  maturityRating: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
}

export interface SearchInfo {
  textSnippet: string;
}

export interface Volume {
  kind: string;
  id: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: any;
  searchInfo: SearchInfo;
}
