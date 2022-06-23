import { createApi } from '@reduxjs/toolkit/query/react';

// API
import { getTheMovieDBBaseQuery, API_KEY } from '../api';

export const moviesService = createApi({
	reducerPath: 'movies',
	baseQuery: getTheMovieDBBaseQuery('movie'),
	endpoints: (builder) => ({
		getMovie: builder.query({
			query: (id: string) => ({
				url: id,
				method: 'GET',
				params: { api_key: API_KEY },
			}),
		}),
		getPopularMovies: builder.query({
			query: (page: number) => ({
				url: 'popular',
				method: 'GET',
				params: { api_key: API_KEY, page },
			}),
		}),
	}),
});

export const { useGetMovieQuery, useGetPopularMoviesQuery } = moviesService;
