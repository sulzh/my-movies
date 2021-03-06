import React from 'react';

// Styles
import './styles.scss';

type SpinnerTypes = {
  isSpinning: boolean;
};

const Spinner: React.FC<SpinnerTypes> = (props) => {
  const { isSpinning } = props;

  if (!isSpinning) {
    return null;
  }

  return (
    <div className="spinner" data-testid="spinner">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default React.memo(Spinner);
