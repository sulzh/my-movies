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
		<div className="spinner">
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};

export default Spinner;
