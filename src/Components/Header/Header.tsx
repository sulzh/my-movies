import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

// Constants
import { navigation } from '../../navigation/constants';
import { THEME } from '../../utils/constants';
// Components
import ToggleBtn from '../ToggleBtn/ToggleBtn';
// Styles
import './styles.scss';

type HeaderProps = {
  theme: string;
  switchTheme: () => void;
};

const Header: React.FC<HeaderProps> = (props) => {
  const { theme, switchTheme } = props;

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
        <div className="header__theme-btn">
          {theme === THEME.DARK ? (
            <span className="header__theme-icon">🌝</span>
          ) : (
            <span className="header__theme-icon">🌞</span>
          )}
          <ToggleBtn
            toggleOn={theme === THEME.DARK}
            onClick={switchTheme}
          />
        </div>
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
