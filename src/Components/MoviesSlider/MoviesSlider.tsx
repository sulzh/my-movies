import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

// Models
import { Movie } from '../../utils/models';
// Components
import MovieCard from '../MovieCard/MovieCard';
// Styles
import './styles.scss';

type MoviesSliderTypes = {
  data: Movie[];
  title?: string;
};

const MoviesSlider: React.FC<MoviesSliderTypes> = (props) => {
  const { data, title } = props;

  if (!data || data.length === 0) {
    return null;
  }

  const renderMovie = (movie: Movie) => (
    <SwiperSlide key={movie.id}>
      <MovieCard {...movie} />
    </SwiperSlide>
  );

  return (
    <div className="movies-slider container">
      {!!title && (
        <div className="heading container">
          <h2 className="heading__sub-title movies-slider__title">{title}</h2>
        </div>
      )}
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerGroup={1}
        slidesPerView={4}
        className="movies-slider__slider"
      >
        {data.map(renderMovie)}
      </Swiper>
    </div>
  );
};

export default MoviesSlider;
