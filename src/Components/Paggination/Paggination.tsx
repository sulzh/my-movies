import React from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';

// Styles
import './styles.scss';

type PagginationTypes = {
  page: number;
  setPage: (p: number) => void;
  totalPages: number;
};

const Paggination: React.FC<PagginationTypes> = (props) => {
  const { page, totalPages, setPage } = props;

  const onPrevClick = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const onNextClick = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagginaton">
      <button
        className="pagginaton__btn"
        onClick={onPrevClick}
        disabled={page === 1}
      >
        <BsFillArrowLeftSquareFill size={40} color="#0006f5" />
      </button>
      <button
        className="pagginaton__btn"
        onClick={onNextClick}
        disabled={page === totalPages}
      >
        <BsFillArrowRightSquareFill size={40} color="#0006f5" />
      </button>
    </div>
  );
};

export default Paggination;
