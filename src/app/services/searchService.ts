import { createApi } from '@reduxjs/toolkit/query/react';

// API
import { getTheMovieDBBaseQuery, API_KEY } from '../api';

export const searchService = createApi({
	reducerPath: 'search',
	baseQuery: getTheMovieDBBaseQuery('search'),
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
			transformResponse: (response: any) => response.results,
		}),
	}),
});

export const { useSearchMoviesQuery } = searchService;
