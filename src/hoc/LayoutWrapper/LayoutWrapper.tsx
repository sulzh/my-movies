import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

// Components
import Header from '../../components/Header/Header';
// Styles
import './styles.scss';

const propTypes = {
	children: PropTypes.instanceOf(Object),
};

const LayoutWrapper = () => {
	return (
		<div className="page">
			<Header />
			<Outlet />
		</div>
	);
};

LayoutWrapper.propTypes = propTypes;

export default LayoutWrapper;
