import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Like from '../Like/Like';
// Styles
import './styles.scss';

type MovieCardTypes = {
	id: number;
	poster_path: string;
	original_title: string;
	release_date: string;
	vote_average: number;
};

const MovieCard = (props: MovieCardTypes) => {
	const { id, poster_path, original_title, release_date, vote_average } = props;

	return (
		<div className="movie-card">
			<div className="movie-card__container">
				{poster_path ? (
					<img
						className="movie-card__poster"
						src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
						alt={`${original_title} poster`}
					/>
				) : (
					<div className="movie-card__no-poster" />
				)}
				<div className="movie-card__info">
					<Link
						className="movie-card__link"
						to={{ pathname: '/movie', search: `id=${id}` }}
					>
						<h2 className="movie-card__title">{original_title}</h2>
					</Link>
					<div className="movie-card__block">
						<div className="movie-card__wrap">
							<span className="movie-card__rate">{`Rate: ${vote_average}`}</span>
							<span className="movie-card__date">{`Date: ${release_date}`}</span>
						</div>
						<Like id={id} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
