import React from 'react';
import '@babel/polyfill';
import RectDOM from 'react-dom';

// Components
import App from './Modules/App/App';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

RectDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('app')
);
