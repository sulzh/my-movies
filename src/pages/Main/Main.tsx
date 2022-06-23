import React from 'react';

// Services
import { useGetPopularMoviesQuery } from '../../app/services/moviesService';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import MovieCard from '../../components/MovieCard/MovieCard';
// Styles
import './index.scss';

const Main = () => {
	const { data, isLoading } = useGetPopularMoviesQuery(1);

	console.log('data', data);

	return (
		<div className="main-page container">
			<div className="heading">
				<h1 className="heading__title">
					Discover, find and save movies to your collection of favorites
				</h1>
			</div>
			<SearchBar />
			<div className="movie-list">
				{data &&
					data.results &&
					data.results.length > 0 &&
					data.results.map((d: any) => <MovieCard key={d.id} {...d} />)}
			</div>
			<Spinner isSpinning={isLoading} />
		</div>
	);
};

export default Main;
