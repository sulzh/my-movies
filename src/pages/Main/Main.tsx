import React from 'react';

// Services
import { useGetPopularMoviesQuery } from '../../app/services/moviesService';
// Styles
import './index.scss';

const App = () => {
	const { data } = useGetPopularMoviesQuery(1);

	console.log('data', data);

	return (
		<div>
			<h1 className="title">Hello world!</h1>
		</div>
	);
};

export default App;
