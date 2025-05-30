import React from 'react';
import ReactDOM from 'react-dom/client';

import { IndexContextProvider } from '@/context/index';

import App from '@/components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<IndexContextProvider>
			<App />
		</IndexContextProvider>
	</React.StrictMode>,
);
