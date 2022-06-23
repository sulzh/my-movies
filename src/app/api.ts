import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const API_KEY = 'e8b2b9d1a810a529d76a8fb24caa84df';

export const getTheMovieDBBaseQuery = (apiEndpoint: string) =>
	fetchBaseQuery({
		baseUrl: `https://api.themoviedb.org/3/${apiEndpoint}/`,
	});
