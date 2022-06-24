import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

// Styles
import './styles.scss';

type MoviesSliderTypes = {
	data: any;
};

const MoviesSlider = (props: MoviesSliderTypes) => {
	const { data } = props;

	if (!data || data.length === 0) {
		return null;
	}

	const renderImage = ({ file_path }: any, i: number) => (
		<SwiperSlide key={`img-${i}`}>
			<div
				className="gallery__img"
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original${file_path}")`,
				}}
			/>
		</SwiperSlide>
	);

	return (
		<div className="gallery">
			<Swiper
				modules={[Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={0}
				slidesPerGroup={1}
				slidesPerView={3}
				className="gallery__slider"
			>
				{data.map(renderImage)}
			</Swiper>
		</div>
	);
};

export default MoviesSlider;
