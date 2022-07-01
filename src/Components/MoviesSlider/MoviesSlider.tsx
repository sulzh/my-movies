import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

// Models
import { Movie } from '../../utils/models';
// Components
import MovieCard from '../MovieCard/MovieCard';
import SliderControls from '../SliderContols/SliderControls';
// Styles
import './styles.scss';

type MoviesSliderTypes = {
  data: Movie[];
  title?: string;
};

const MoviesSlider: React.FC<MoviesSliderTypes> = (props) => {
  const ref = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const { data, title } = props;
  const settings = {
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
  };

  if (!data || data.length === 0) {
    return null;
  }

  const renderMovie = (movie: Movie) => <MovieCard key={movie.id} {...movie} />;

  return (
    <div className="movies-slider container">
      <div className="heading container">
        {!!title && (
          <h2 className="heading__sub-title movies-slider__title">{title}</h2>
        )}
        <SliderControls
          sliderRef={ref}
          slideIndex={slideIndex}
          slidesLength={data.length - settings.slidesToShow}
        />
      </div>
      <Slider
        ref={ref}
        {...settings}
        className="movies-slider__slider variable-width"
      >
        {data.map(renderMovie)}
      </Slider>
    </div>
  );
};

export default MoviesSlider;
