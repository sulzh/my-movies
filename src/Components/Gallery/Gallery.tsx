import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

// Constants
import { IMG_URL } from '../../utils/constants';
// Models
import { Backdrop } from '../../utils/models';
// Styles
import './styles.scss';

type MoviesSliderTypes = {
	data: Backdrop[];
};

const MoviesSlider: React.FC<MoviesSliderTypes> = (props) => {
	const { data } = props;

	if (!data || data.length === 0) {
		return null;
	}

	const renderImage = ({ file_path }: Backdrop, i: number) => (
		<SwiperSlide key={`img-${i}`}>
			<div
				className="gallery__img"
				style={{
					backgroundImage: `url("${IMG_URL}${file_path}")`,
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
