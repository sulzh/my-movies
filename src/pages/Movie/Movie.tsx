import React from 'react';
import { Pagination } from 'swiper';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

// Components
import Spinner from '../../components/Spinner/Spinner';
// Store
import {
	useGetMovieQuery,
	useGetMovieImagesQuery,
} from '../../app/services/moviesService';
// Styles
import './styles.scss';

const Movie = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const movieId = params.get('id');

	const movie = useGetMovieQuery(movieId);
	const movieImgs = useGetMovieImagesQuery(movieId);

	const renderImg = (img: any, i: number) => (
		<SwiperSlide key={`img-${i}`}>
			<div
				className="movie-page__img"
				style={{
					backgroundImage: `url("https://www.themoviedb.org/t/p/original${img.file_path}")`,
				}}
			/>
		</SwiperSlide>
	);

	return (
		<div className="movie-page">
			{movie.data && (
				<div className="heading container">
					<h1 className="heading__title">{movie.data.original_title}</h1>
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
			{movieImgs.data && (
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					spaceBetween={0}
					slidesPerGroup={1}
					slidesPerView={3}
					className="movie-page__slider"
				>
					{movieImgs.data.backdrops.map(renderImg)}
				</Swiper>
			)}
			<Spinner isSpinning={movie.isLoading || movieImgs.isLoading} />
		</div>
	);
};

export default Movie;
