import React from 'react';
import { NavLink } from 'react-router-dom';

// Constants
import { navigation } from '../../navigation/constants';
// Styles
import './styles.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header__wrapper container">
				<NavLink to={navigation.main} className="header__link header__logo">
					MyMovies
				</NavLink>
				<NavLink to={navigation.favorites} className="header__link">
					Favorites
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
