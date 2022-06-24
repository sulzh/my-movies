import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Store
import { useAppDispatch, useAppSelector } from '../../app/store';
import { deleteMovie, setMovie } from '../../pages/Favorites/store';
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
	const dispatch = useAppDispatch();
	const favoriteMovies = useAppSelector(
		(state) => state.favorites.favoriteMovies
	);

	const { id, poster_path, original_title, release_date, vote_average } = props;
	const like = favoriteMovies.includes(`${id}`);

	const toggleLike = () => {
		if (like) {
			dispatch(deleteMovie(id));
		} else {
			dispatch(setMovie(id));
		}
	};

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
						<button className="movie-card__like" onClick={toggleLike}>
							{like ? (
								<FaHeart size={24} color="#f44336" />
							) : (
								<FaRegHeart size={24} color="#0006f5" />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
