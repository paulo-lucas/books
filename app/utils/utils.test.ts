import { getBestFromImageLinks } from './getBestImageFromImagelinks';
import { volumeQueryBuilder } from './volumeQueryBuilder';

const mockImageLinks1 = {
  smallThumbnail: 'small_thumbnail',
};

const mockImageLinks2 = {
  smallThumbnail: 'small_thumbnail',
  thumbnail: 'small_thumbnail',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const mockResultQuery =
  '"narnia"+"123"|"321"+inauthor:C. S. Lewis+intitle:The Chronicles of Narnia+inpublisher:HarperCollins';
const mockQuery = {
  search: 'narnia',
  identifier: ['123', '321'],
  author: 'C. S. Lewis',
  title: 'The Chronicles of Narnia',
  publisher: 'HarperCollins',
};

describe('get best images function', () => {
  it('should get small thumbnail', () => {
    const result = getBestFromImageLinks(mockImageLinks1);
    expect(result).toBe('small_thumbnail');
  });

  it('should get large image', () => {
    const result = getBestFromImageLinks(mockImageLinks2);
    expect(result).toBe('large');
  });
});

describe('volum query builder function', () => {
  it('should mount query', () => {
    const result = volumeQueryBuilder(mockQuery);
    expect(result).toBe(mockResultQuery);
  });
});
