import React, { useState } from "react";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

import { auth, singInWithGoogle } from "../../firebase/firebase.utils";

import "./style.scss";

const SignIn = () => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = e => {
		const { value, name } = e.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit} autoComplete="off">
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={singInWithGoogle} isGoogleSignIn>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
