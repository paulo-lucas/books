import { VolumeSearchRequest } from '@app/interfaces/volume';

export const volumeQueryBuilder = (request: VolumeSearchRequest): string => {
  const { search, author, title, publisher } = request;
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

  return query;
};
