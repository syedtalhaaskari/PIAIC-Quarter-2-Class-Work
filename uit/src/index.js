import React from 'react';
import ReactDOM from 'react-dom/client';
import Header, { ABC } from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<h1>Hello</h1>
		Test
		<Header />
		<ABC />
	</>
);