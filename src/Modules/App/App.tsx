import React from 'react';
import { hot } from 'react-hot-loader';

// Styles
import './index.scss';

const App = () => {
	return (
		<div>
			<h1 className="title">Hello world!</h1>
		</div>
	);
};

export default hot(module)(App);
