import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Constants
import { navigation } from '../../navigation/constants';
// Styles
import './styles.scss';

const Header: React.FC = () => {
  const renderFavoriteIcon = (isActive: boolean) =>
    isActive ? (
      <FaHeart
        size={24}
        className="liked-color"
      />
    ) : (
      <FaRegHeart
        size={24}
        className="primary-color"
      />
    );

  return (
    <div className="header">
      <div className="header__wrapper container">
        <NavLink
          to={navigation.main}
          className="header__link header__logo"
        >
          MyMovies
        </NavLink>
        <NavLink
          to={navigation.favorites}
          className="header__link"
        >
          {({ isActive }) => renderFavoriteIcon(isActive)}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
