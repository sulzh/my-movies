import React from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

type ToggleBtnProps = {
  onClick: () => void;
  toggleOn: boolean;
  className?: string;
};

const ToggleBtn: React.FC<ToggleBtnProps> = (props) => {
  const { onClick, toggleOn, className } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {toggleOn ? (
        <BsToggleOn
          size={31}
          className="primary-color"
        />
      ) : (
        <BsToggleOff
          size={31}
          className="primary-color"
        />
      )}
    </button>
  );
};

export default React.memo(ToggleBtn);
