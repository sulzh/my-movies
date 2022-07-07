import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { useLocalStorage } from '@rehooks/local-storage';

// Components
import Header from '../Header/Header';
// Constants
import { THEME } from '../../utils/constants';
// Styles
import './styles.scss';

const propTypes = {
  children: PropTypes.instanceOf(Object),
};

const LayoutWrapper = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? THEME.DARK : THEME.LIGHT
  );

  const switchTheme = useCallback(() => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <main
      className="main"
      data-theme={theme}
    >
      <Header
        theme={theme}
        switchTheme={switchTheme}
      />
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
};

LayoutWrapper.propTypes = propTypes;

export default LayoutWrapper;
