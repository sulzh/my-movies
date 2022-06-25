import React, { useEffect } from 'react';

// Models
import { Movie } from '../../utils/models';
// Components
import Spinner from '../../components/Spinner/Spinner';
import MovieCard from '../../components/MovieCard/MovieCard';
// Store
import { useAppSelector } from '../../app/store';
import { useLazyGetAllMoviesQuery } from '../../app/services/moviesService';
// Styles
import './index.scss';

const Favorites: React.FC = () => {
	const favoriteMovies = useAppSelector(
		(state) => state.favorites.favoriteMovies
	);
	const [fetchFavoriteMovies, { data, isLoading }] = useLazyGetAllMoviesQuery();

	useEffect(() => {
		if (favoriteMovies.length > 0) {
			fetchFavoriteMovies(favoriteMovies);
		}
	}, [favoriteMovies, fetchFavoriteMovies]);

	return (
		<div className="favorites-page container">
			<div className="heading container">
				<h1 className="heading__title">Favorite movies</h1>
			</div>
			<div className="favorites-page__block">
				{data &&
					data.length > 0 &&
					data.map((d: Movie) => <MovieCard key={d.id} {...d} />)}
			</div>
			<Spinner isSpinning={isLoading} />
		</div>
	);
};

export default Favorites;
