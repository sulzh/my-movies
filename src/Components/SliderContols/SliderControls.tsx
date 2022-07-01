import React from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

// Styles
import './styles.scss';

type SliderControlsTypes = {
  sliderRef: any;
  slideIndex: number;
  slidesLength: number;
};

const SliderControls: React.FC<SliderControlsTypes> = (props) => {
  const { sliderRef, slideIndex, slidesLength } = props;

  const onPrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const onNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="slider-controls">
      <button onClick={onPrevClick} disabled={slideIndex === 0}>
        <BsFillArrowLeftSquareFill size={40} color="#0006f5" />
      </button>
      <button onClick={onNextClick} disabled={slideIndex === slidesLength}>
        <BsFillArrowRightSquareFill size={40} color="#0006f5" />
      </button>
    </div>
  );
};

export default SliderControls;
