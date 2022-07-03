import { useState, useCallback } from 'react';

const useSliderControls = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const beforeChange = useCallback((previous: number, next: number) => {
    setSlideIndex(next);
  }, []);

  return { slideIndex, beforeChange };
};

export { useSliderControls };
