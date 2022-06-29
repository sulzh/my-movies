import React, { useRef } from 'react';
import Slider from 'react-slick';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

// Constants
import { IMG_URL } from '../../utils/constants';
// Models
import { Backdrop } from '../../utils/models';
// Styles
import './styles.scss';

type GalleryTypes = {
  data: Backdrop[];
};

const Gallery: React.FC<GalleryTypes> = (props) => {
  const { data } = props;
  const settings = {
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ref = useRef(null);

  if (!data || data.length === 0) {
    return null;
  }

  const renderImage = ({ file_path }: Backdrop, i: number) => (
    <div>
      <div
        key={`img-${i}`}
        className="gallery__img"
        style={{
          backgroundImage: `url("${IMG_URL}${file_path}")`,
        }}
      />
    </div>
  );

  const onPrevClick = () => {
    ref.current?.slickPrev();
  };

  const onNextClick = () => {
    ref.current?.slickNext();
  };

  return (
    <div className="gallery">
      <div className="heading container">
        <div className="movies-slider__controls">
          <button onClick={onPrevClick}>
            <BsFillArrowLeftSquareFill size={40} color="#0006f5" />
          </button>
          <button onClick={onNextClick}>
            <BsFillArrowRightSquareFill size={40} color="#0006f5" />
          </button>
        </div>
      </div>
      <Slider ref={ref} {...settings} className="gallery__slider">
        {data.map(renderImage)}
      </Slider>
    </div>
  );
};

export default Gallery;
