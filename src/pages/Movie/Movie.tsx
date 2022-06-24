import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Like from '../../components/Like/Like';
import Spinner from '../../components/Spinner/Spinner';
import Gallery from '../../components/Gallery/Gallery';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
// Store
import {
	useGetMovieQuery,
	useGetMovieImagesQuery,
	useGetRecommendationsQuery,
} from '../../app/services/moviesService';
// Styles
import './styles.scss';

const Movie = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const movieId = params.get('id');
	const movie = useGetMovieQuery(movieId);
	const movieImgs = useGetMovieImagesQuery(movieId);
	const recommendations = useGetRecommendationsQuery(movieId);

	return (
		<div className="movie-page">
			{movie.data && (
				<div className="heading container">
					<div className="movie-page__header">
						<h1 className="heading__title">{movie.data.original_title}</h1>
						<Like id={Number(movieId)} />
					</div>
					<div className="movie-page__info">
						<span className="movie-page__rate">
							{`Rate: ${movie.data.vote_average}`}
						</span>
						<span className="movie-page__date">
							{`Date: ${movie.data.release_date}`}
						</span>
					</div>
					<p className="movie-page__description">{movie.data.overview}</p>
				</div>
			)}
			<Gallery data={movieImgs.data && movieImgs.data.backdrops} />
			<MoviesSlider title="Recommendations" data={recommendations.data} />
			<Spinner
				isSpinning={
					movie.isLoading || movieImgs.isLoading || recommendations.isLoading
				}
			/>
		</div>
	);
};

export default Movie;
