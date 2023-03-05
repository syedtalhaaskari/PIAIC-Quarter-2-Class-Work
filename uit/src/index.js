import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Header name="Talha" age={25} /> {/* Default Export */}
	</>
);