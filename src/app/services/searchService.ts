import { createApi } from '@reduxjs/toolkit/query/react';

// Constants
import { API_KEY } from '../../utils/constants';
// Models
import {
  BaseMoviesResponceInterface,
  SearchRequestParamsInterface,
} from '../models';
// API
import { fetchTMDBBaseQuery } from '../api';

export const searchService = createApi({
  reducerPath: 'search',
  baseQuery: fetchTMDBBaseQuery('search'),
  endpoints: (builder) => ({
    searchMovies: builder.query<
      BaseMoviesResponceInterface,
      SearchRequestParamsInterface
    >({
      query: (params: SearchRequestParamsInterface) => ({
        url: 'movie',
        method: 'GET',
        params: {
          api_key: API_KEY,
          ...params,
        },
      }),
    }),
  }),
});

export const { useLazySearchMoviesQuery } = searchService;
