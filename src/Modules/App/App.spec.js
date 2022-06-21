import React from 'react';
import { render, cleanup } from '@testing-library/react';

// Components
import App from './App';

describe('App', () => {
	it('Render without errors', () => {
		render(<App/>);
		cleanup();
	});
});