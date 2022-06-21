import React from 'react';
import { NavLink } from 'react-router-dom';
// Constants
import { navigation } from '../../navigation/constants';
// Styles
import './styles.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="navigation">
				<NavLink className="navigation__link" to={navigation.main}>
					<span className="navigation__item">Mymovies</span>
				</NavLink>
				<NavLink className="navigation__link" to={navigation.movie}>
					<span className="navigation__item">Movie</span>
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
