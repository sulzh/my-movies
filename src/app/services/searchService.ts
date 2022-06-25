import { createApi } from '@reduxjs/toolkit/query/react';

// Constants
import { API_KEY } from '../../utils/constants';
// Models
import { BaseMoviesResponceInterface } from '../models';
// API
import { fetchTMDBBaseQuery } from '../api';

export const searchService = createApi({
	reducerPath: 'search',
	baseQuery: fetchTMDBBaseQuery('search'),
	endpoints: (builder) => ({
		searchMovies: builder.query({
			query: (query: string) => ({
				url: 'movie',
				method: 'GET',
				params: {
					api_key: API_KEY,
					query,
					page: 1,
				},
			}),
			transformResponse: (response: BaseMoviesResponceInterface) =>
				response.results,
		}),
	}),
});

export const { useSearchMoviesQuery } = searchService;
