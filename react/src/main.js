import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';

function panel(){
	ReactDOM.render(
		<Main/>,
		document.getElementById('container')
	);
}

document.addEventListener('DOMContentLoaded', panel());
