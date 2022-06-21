import React from 'react';

// Styles
import './styles.scss';

type WarningTypes = {
	children: React.ReactNode;
};

export default class Warning extends React.Component<WarningTypes> {
	state = {
		isError: false,
	};

	static getDerivedStateFromError() {
		return { isError: true };
	}

	render() {
		const { isError } = this.state;
		const { children } = this.props;
		return isError ? (
			<div className="error-boundary">
				<span className="error-boundary__text">Sorry, something went wrong.</span>
			</div>
		) : (
			children
		);
	}
}
