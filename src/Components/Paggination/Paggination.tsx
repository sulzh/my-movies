import React from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

// Styles
import './styles.scss';

type PagginationTypes = {
  page: number;
  setPage: (d: { page: string }) => void;
  totalPages: number;
};

const Paggination: React.FC<PagginationTypes> = (props) => {
  const { page, totalPages, setPage } = props;

  const onPrevClick = () => {
    if (page === 0) return;
    setPage({ page: `${page - 1}` });
    window.scrollTo(0, 0);
  };

  const onNextClick = () => {
    if (page === totalPages) return;
    setPage({ page: `${page + 1}` });
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagginaton">
      <button
        className="pagginaton__btn"
        onClick={onPrevClick}
        disabled={page === 1}
      >
        <BsFillArrowLeftSquareFill
          size={40}
          className="primary-color"
        />
      </button>
      <button
        className="pagginaton__btn"
        onClick={onNextClick}
        disabled={page === totalPages}
      >
        <BsFillArrowRightSquareFill
          size={40}
          className="primary-color"
        />
      </button>
    </div>
  );
};

export default Paggination;
