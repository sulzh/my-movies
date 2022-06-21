import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.func,
};

export default class Warning extends React.Component {
	state = {
		isError: false,
	};

	static getDerivedStateFromError() {
		return { isError: true };
	}

	render() {
		const { isError } = this.state;
		const { children } = this.props;
		return isError ? <div>Sorry, something went wrong.</div> : children;
	}
}

Warning.propTypes = propTypes;
