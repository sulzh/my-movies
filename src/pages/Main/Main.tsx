import React, { useCallback } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

// Constants
import { navigation } from '../../navigation/constants';
// Services
import { useGetPopularMoviesQuery } from '../../app/services/moviesService';
// Components
import SearchBar from '../../components/SearchBar/SearchBar';
import Spinner from '../../components/Spinner/Spinner';
import MovieCard from '../../components/MovieCard/MovieCard';
// Styles
import './index.scss';

const Main = () => {
	const navigate = useNavigate();
	const { data, isLoading } = useGetPopularMoviesQuery(1);

	const submitSearch = useCallback((query: string) => {
		navigate({
			pathname: navigation.search,
			search: createSearchParams({ query }).toString(),
		});
	}, []);

	const renderMovie = (movie: any) => (
		<SwiperSlide key={movie.id}>
			<MovieCard {...movie} />
		</SwiperSlide>
	);

	return (
		<div className="main-page">
			<div className="heading container">
				<h1 className="heading__title">
					Discover, search and save movies to your collection of favorites
				</h1>
				<SearchBar onSubmit={submitSearch} />
			</div>
			{data && data.length > 0 && (
				<div className="main-page__block">
					<Swiper
						modules={[Navigation]}
						navigation={true}
						spaceBetween={10}
						slidesPerGroup={3}
						slidesPerView="auto"
						className="main-page__slider"
					>
						{data.map(renderMovie)}
					</Swiper>
				</div>
			)}
			<Spinner isSpinning={isLoading} />
		</div>
	);
};

export default Main;
