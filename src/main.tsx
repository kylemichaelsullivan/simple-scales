import React from 'react';
import ReactDOM from 'react-dom/client';

import { IndexContextProvider } from '@/context/index';

import App from '@/components/App';

import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<IndexContextProvider>
			<App />
		</IndexContextProvider>
	</React.StrictMode>
);
