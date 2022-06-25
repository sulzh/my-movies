import { createApi } from '@reduxjs/toolkit/query/react';

// Models;
import { Movie } from '../../utils/models';
import { BaseMoviesResponceInterface, MovieResponceInterface } from '../models';
// Constants
import { API_KEY } from '../../utils/constants';
// API
import { fetchTMDBBaseQuery } from '../api';

export const moviesService = createApi({
	reducerPath: 'movies',
	baseQuery: fetchTMDBBaseQuery('movie'),
	endpoints: (builder) => ({
		getMovie: builder.query<MovieResponceInterface, string>({
			queryFn: async (id: string, api, extra, fetchWithBQ) => {
				try {
					const movie = await fetchWithBQ(`${id}?api_key=${API_KEY}`);
					const images = await fetchWithBQ(`${id}/images?api_key=${API_KEY}`);
					const recommendations = await fetchWithBQ(
						`${id}/recommendations?api_key=${API_KEY}`
					);
					return {
						data: {
							movie: movie.data,
							images: images.data,
							recommendations: recommendations.data,
						},
					};
				} catch (error) {
					return { data: error };
				}
			},
		}),
		getAllMovies: builder.query<Movie[], string[]>({
			queryFn: async (moviesIds: string[], api, extra, fetchWithBQ) => {
				try {
					const promises = [];
					for (const id of moviesIds) {
						promises.push(fetchWithBQ(`${id}?api_key=${API_KEY}`));
					}
					const result = await Promise.all(promises);
					return { data: result.map((r) => r.data) };
				} catch (error) {
					return { data: error };
				}
			},
		}),
		getPopularMovies: builder.query<Movie[], number>({
			query: (page: number) => ({
				url: 'popular',
				method: 'GET',
				params: { api_key: API_KEY, page },
			}),
			transformResponse: (response: BaseMoviesResponceInterface) =>
				response.results,
		}),
	}),
});

export const {
	useGetMovieQuery,
	useLazyGetAllMoviesQuery,
	useGetPopularMoviesQuery,
} = moviesService;
