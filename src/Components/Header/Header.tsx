import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

// Constants
import { navigation } from '../../navigation/constants';
// Styles
import './styles.scss';

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="header__wrapper container">
				<NavLink to={navigation.main} className="header__link header__logo">
					MyMovies
				</NavLink>
				<NavLink to={navigation.favorites} className="header__link">
					<FaRegHeart size={26} color="#000000" />
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
