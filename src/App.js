import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './page/Homepage';
import ShopPage from './page/Shop';
import Header from './components/Header';
import SignInAndSignUp from './page/SignInAndSignUp';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });

			console.log('user:', user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<Header currentUser={currentUser}/>
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/shop" component={ShopPage}/>
					<Route exact path="/signin" component={SignInAndSignUp}/>
				</Switch>
			</div>
		);
	}
}

export default App;
