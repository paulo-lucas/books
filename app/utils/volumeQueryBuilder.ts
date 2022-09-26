import { VolumeSearchQuery } from '@app/interfaces/volume';

export const volumeQueryBuilder = (fields: VolumeSearchQuery): string => {
  const { search, author, title, publisher, identifier } = fields;
  let query = '';

  if (search) {
    query += `+${search}`;
  }

  if (author) {
    query += `+inauthor:${author}`;
  }

  if (title) {
    query += `+intitle:${title}`;
  }

  if (publisher) {
    query += `+inpublisher${publisher}`;
  }

  if (identifier?.length) {
    query += `+${identifier.join('|')}`;
  }

  query = query.replace(/^\+/, '');

  return query;
};
