import React from 'react';

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
		return isError ? <div>Sorry, something went wrong.</div> : children;
	}
}