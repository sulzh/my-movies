import React, { useRef, useState, useCallback } from 'react';

// Models
import { Movie } from '../../utils/models';
// Constants
import { settings } from './constants';
// Components
import MovieCard from '../MovieCard/MovieCard';
import MemoSlider from '../MemoSlider/MemoSlider';
import SliderControls from '../SliderContols/SliderControls';
// Styles
import './styles.scss';

type MoviesSliderTypes = {
  data: Movie[];
  title?: string;
};

const MoviesSlider: React.FC<MoviesSliderTypes> = (props) => {
  const { data, title } = props;
  const ref = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const beforeChange = useCallback((p: number, n: number) => {
    setSlideIndex(n);
  }, []);

  const renderMovie = useCallback(
    (movie: Movie) => <MovieCard key={movie.id} {...movie} />,
    []
  );

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="movies-slider container">
      <div className="heading container">
        {!!title && (
          <h2 className="heading__sub-title movies-slider__title">{title}</h2>
        )}
        <SliderControls
          sliderRef={ref}
          slideIndex={slideIndex}
          slidesLength={data.length}
          slidesToShow={settings.slidesToShow}
        />
      </div>
      <MemoSlider
        innerRef={ref}
        data={data}
        settings={settings}
        beforeChange={beforeChange}
        renderSlide={renderMovie}
        className="movies-slider__slider"
      />
    </div>
  );
};

export default MoviesSlider;
