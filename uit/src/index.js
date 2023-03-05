import React from 'react';
import ReactDOM from 'react-dom/client';
import Header, { ABC } from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Header /> {/* Default Export */}
		<ABC /> {/* Non-Default Export */}
	</>
);