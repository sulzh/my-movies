import { WEB_VIEWPORT, TABLET_VIEWPORT } from '../../utils/constants';

export const settings = {
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: WEB_VIEWPORT,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: TABLET_VIEWPORT,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
