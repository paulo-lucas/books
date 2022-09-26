import {
  VolumeSearchRequest,
  VolumeSearchResponse,
} from '@app/interfaces/volume';
import { BooksUrl } from './constants/books';
import { volumeQueryBuilder } from '@app/utils/volumeQueryBuilder';
import http from './http';
import { AxiosResponse } from 'axios';

export const searchVolumes = async ({
  query,
  maxResults,
  startIndex,
}: VolumeSearchRequest): Promise<AxiosResponse<VolumeSearchResponse>> =>
  http.get<VolumeSearchResponse>(BooksUrl.VOLUME, {
    params: {
      q: volumeQueryBuilder(query),
      maxResults,
      startIndex,
    },
  });
