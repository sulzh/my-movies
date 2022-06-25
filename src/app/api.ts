import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TMDB_URL } from '../utils/constants';

export const fetchTMDBBaseQuery = (apiEndpoint: string) =>
	fetchBaseQuery({
		baseUrl: `${TMDB_URL}${apiEndpoint}/`,
	});
