import { VolumeInfo } from '@app/interfaces/volume';

export const getBestFromImageLinks = (
  imageLinks: VolumeInfo['imageLinks'],
): string =>
  imageLinks.large ??
  imageLinks.medium ??
  imageLinks.small ??
  imageLinks.thumbnail ??
  imageLinks.smallThumbnail ??
  'https://www.xy.com/images/placeholder.jpg';
