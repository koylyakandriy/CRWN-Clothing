import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './page/Homepage';
import ShopPage from './page/Shop';
import Header from './components/Header';
import SignInAndSignUp from './page/SignInAndSignUp';

import './App.css';

const App = () => {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/shop" component={ShopPage}/>
				<Route exact path="/signin" component={SignInAndSignUp}/>
			</Switch>
		</div>
	);
};

export default App;
