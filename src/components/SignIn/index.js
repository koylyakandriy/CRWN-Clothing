import React, { Component } from 'react';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import './style.scss';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = e => {
		e.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		const { password, email } = this.state;
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit} autoComplete="off">
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={password}
						handleChange={this.handleChange}
						label="password"
						required
					/>

					<CustomButton type="submit">Sign In</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
