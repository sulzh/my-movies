import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

// Constants
import { IMG_URL } from '../../utils/constants';
// Components
import SliderControls from '../SliderContols/SliderControls';
// Models
import { Backdrop } from '../../utils/models';
// Styles
import './styles.scss';

type GalleryTypes = {
  data: Backdrop[];
};

const Gallery: React.FC<GalleryTypes> = (props) => {
  const ref = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const { data } = props;
  const settings = {
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    beforeChange: (current: number, next: number) => setSlideIndex(next),
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

  return (
    <div className="gallery">
      <div className="heading container">
        <SliderControls
          sliderRef={ref}
          slideIndex={slideIndex}
          slidesLength={data.length - settings.slidesToShow}
        />
      </div>
      <Slider ref={ref} {...settings} className="gallery__slider">
        {data.map(renderImage)}
      </Slider>
    </div>
  );
};

export default Gallery;
