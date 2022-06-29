import React, { useRef } from 'react';
import Slider from 'react-slick';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

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
  const settings = {
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const ref = useRef(null);

  if (!data || data.length === 0) {
    return null;
  }

  const renderMovie = (movie: Movie) => <MovieCard key={movie.id} {...movie} />;

  const onPrevClick = () => {
    ref.current?.slickPrev();
  };

  const onNextClick = () => {
    ref.current?.slickNext();
  };

  return (
    <div className="movies-slider container">
      <div className="heading container">
        {!!title && (
          <h2 className="heading__sub-title movies-slider__title">{title}</h2>
        )}
        <div className="movies-slider__controls">
          <button onClick={onPrevClick}>
            <BsFillArrowLeftSquareFill size={40} color="#0006f5" />
          </button>
          <button onClick={onNextClick}>
            <BsFillArrowRightSquareFill size={40} color="#0006f5" />
          </button>
        </div>
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
