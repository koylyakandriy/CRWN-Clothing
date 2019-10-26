import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './page/Homepage';
import ShopPage from './page/Shop';

import './App.css';

const App = () => {
	return (
		<div>
			<Route exact path="/" component={HomePage}/>
			<Route exact path="/shop" component={ShopPage}/>
		</div>
	);
};

export default App;
