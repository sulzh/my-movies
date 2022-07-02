import React, { useRef, useState, useCallback } from 'react';

// Constants
import { IMG_URL } from '../../utils/constants';
import { settings } from './constants';
// Components
import MemoSlider from '../MemoSlider/MemoSlider';
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
  const { data } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  const beforeChange = useCallback((p: number, n: number) => {
    setSlideIndex(n);
  }, []);

  const renderImage = useCallback(
    ({ file_path }: Backdrop, i: number) => (
      <div key={`img-${i}`}>
        <div
          className="gallery__img"
          style={{
            backgroundImage: `url("${IMG_URL}${file_path}")`,
          }}
        />
      </div>
    ),
    []
  );

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="gallery">
      <div className="heading container">
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
        renderSlide={renderImage}
        className="gallery__slider"
      />
    </div>
  );
};

export default Gallery;
