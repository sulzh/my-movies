import React from 'react';
import Slider, { Settings } from 'react-slick';

// Models
import { Movie, Backdrop } from '../../utils/models';

type MemoSliderTypes = {
  innerRef: any;
  data: Movie[] | Backdrop[];
  settings: Settings;
  className?: string;
  beforeChange: (p: number, n: number) => void;
  renderSlide: (d: Movie | Backdrop, i: number) => React.ReactNode;
};

const MemoSlider: React.FC<MemoSliderTypes> = React.memo((props) => {
  const { data, innerRef, settings, className, beforeChange, renderSlide } =
    props;

  return (
    <Slider
      ref={innerRef}
      {...settings}
      beforeChange={beforeChange}
      className={className}
    >
      {data.map(renderSlide)}
    </Slider>
  );
});

MemoSlider.displayName = 'MemoSlider';

export default MemoSlider;
