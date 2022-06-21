import React from 'react';
import { createRoot } from 'react-dom/client';
import '@babel/polyfill';

// Components
import App from './navigation/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const root = createRoot(document.getElementById('app'));
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
