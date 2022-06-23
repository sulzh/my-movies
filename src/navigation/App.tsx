import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Constants
import { navigation } from './constants';
// Components
import Main from '../pages/Main/Main';
import Movie from '../pages/Movie/Movie';
import Favorites from '../pages/Favorites/Favorites';
import Layout from '../components/LayoutWrapper/LayoutWrapper';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={navigation.main} element={<Layout />}>
					<Route index element={<Main />} />
					<Route path={navigation.movie} element={<Movie />} />
					<Route path={navigation.favorites} element={<Favorites />} />
					<Route path="*" element={<Main />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
