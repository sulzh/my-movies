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
		getMovieImages: builder.query({
			query: (id: string) => ({
				url: `${id}/images`,
				method: 'GET',
				params: { api_key: API_KEY },
			}),
		}),
		getAllMovies: builder.query<string[], string[]>({
			queryFn: async (movies: any, api, extra, fetchWithBQ) => {
				const promises = [];

				for (const id of movies) {
					promises.push(fetchWithBQ(`${id}?api_key=${API_KEY}`));
				}

				const result = await Promise.all(promises);
				return { data: result.map((r) => r.data) };
			},
		}),
		getPopularMovies: builder.query({
			query: (page: number) => ({
				url: 'popular',
				method: 'GET',
				params: { api_key: API_KEY, page },
			}),
			transformResponse: (response: any) => response.results,
		}),
		getRecommendations: builder.query({
			query: (id: string) => ({
				url: `${id}/recommendations`,
				method: 'GET',
				params: { api_key: API_KEY },
			}),
			transformResponse: (response: any) => response.results,
		}),
	}),
});

export const {
	useGetMovieQuery,
	useGetMovieImagesQuery,
	useLazyGetAllMoviesQuery,
	useGetPopularMoviesQuery,
	useGetRecommendationsQuery,
} = moviesService;
