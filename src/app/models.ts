import { Movie, Backdrop, Poster } from '../utils/models';

export interface BaseMoviesResponceInterface {
	page: number;
	results: Movie[];
	total_results: number;
	total_pages: number;
}

export interface MovieResponceInterface {
	movie: Movie;
	images: {
		id: number;
		logos: Poster[];
		backdrops: Backdrop[];
		posters: Poster[];
	};
	recommendations: BaseMoviesResponceInterface;
}
