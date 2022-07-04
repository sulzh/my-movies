import { TABLET_VIEWPORT, MOBILE_VIEWPORT } from '../../utils/constants';

export const settings = {
  infinite: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: TABLET_VIEWPORT,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: MOBILE_VIEWPORT,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
