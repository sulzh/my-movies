import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Like from '../../components/Like/Like';
import Spinner from '../../components/Spinner/Spinner';
import Gallery from '../../components/Gallery/Gallery';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
// Store
import { useGetMovieQuery } from '../../app/services/moviesService';
// Styles
import './styles.scss';

const Movie: React.FC = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const movieId = params.get('id');
	const { data, isLoading } = useGetMovieQuery(movieId);

	return (
		<div className="movie-page">
			{data && !isLoading && (
				<>
					<div className="heading container">
						<div className="movie-page__header">
							<h1 className="heading__title">{data.movie.original_title}</h1>
							<Like id={Number(movieId)} />
						</div>
						<div className="movie-page__info">
							<span className="movie-page__rate">
								{`Rate: ${data.movie.vote_average}`}
							</span>
							<span className="movie-page__date">
								{`Date: ${data.movie.release_date}`}
							</span>
						</div>
						<p className="movie-page__description">{data.movie.overview}</p>
					</div>
					<Gallery data={data.images.backdrops} />
					<MoviesSlider
						title="Recommendations"
						data={data.recommendations.results}
					/>
				</>
			)}
			<Spinner isSpinning={isLoading} />
		</div>
	);
};

export default Movie;
