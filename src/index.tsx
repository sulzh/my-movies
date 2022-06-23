import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import '@babel/polyfill';

// Store
import { store } from './app/store';
// Components
import App from './navigation/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// Styles
import './theme/index.scss';

const root = createRoot(document.getElementById('app'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</Provider>
	</React.StrictMode>
);
