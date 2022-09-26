import {
  VolumeSearchRequest,
  VolumeSearchResponse,
} from '@app/interfaces/volume';
import { BooksUrl } from './constants/books';
import { volumeQueryBuilder } from '@app/utils/volumeQueryBuilder';
import http from './http';
import { AxiosResponse } from 'axios';

export const searchVolumes = async (
  request: VolumeSearchRequest,
): Promise<AxiosResponse<VolumeSearchResponse>> =>
  http.get<VolumeSearchResponse>(BooksUrl.VOLUME, {
    params: {
      ...request,
      q: volumeQueryBuilder(request.q),
    },
  });
