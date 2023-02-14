import React, { useState } from "react";
import FormInput from "./FormInput";
import validator from "validator";
import "./authentication.scss";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getUserInfo, signInAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";
import { useContext } from "react";
import { AuthContrext } from "../../context/authContext";

const Authentication = () => {
	const { setCurrentUser } = useContext(AuthContrext);
	const initialInput = {
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	};
	const [isRegistered, setIsRegistered] = useState(true);
	const [input, setInput] = useState(initialInput);
	const [errors, setErrors] = useState({});
	const { name, email, password, confirmPassword } = input;

	const handleChange = e => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value
		});
	};
	const isFormValid = isRegistered => {
		let errors = {};

		if (!isRegistered) {
			if (name.length < 2) {
				errors.name = "Name should be at least two characters long";
			}
		}
		if (!validator.isEmail(email)) {
			errors.email = "Valid email is required";
		}
		// Need attention
		//if (!validator.isPassword(password)) {
		if (password.length < 6) {
			errors.password = "Password should contain atleast 6 character";
		}
		if (!isRegistered) {
			if (confirmPassword.length === 0) {
				errors.confirmPassword = "Confirm password is required";
			}

			if (confirmPassword.length > 0 && confirmPassword !== password) {
				errors.confirmPassword = "Passwords do not match, try again";
			}
		}

		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (!isFormValid(isRegistered)) return;

		if (!isRegistered) {
			try {
				const { user } = await createAuthUserWithEmailAndPassword(email, password);

				const userWithDisplayName = await createUserDocumentFromAuth(user, { displayName: name });
				setCurrentUser(userWithDisplayName);
				//console.log(userWithDisplayName);

				setInput(initialInput);
			} catch (error) {
				if (error.code === "auth/email-already-in-use") {
					setErrors({ ...errors, email: "Email is already in use, Try another Email" });
				}
				console.log(error.code);
			}
		}
		if (isRegistered) {
			try {
				const { user } = await signInAuthUserWithEmailAndPassword(email, password);
				//console.log(user);
				const userData = await getUserInfo(user);
				setCurrentUser(userData);

				setInput(initialInput);
			} catch (error) {
				//	console.log(error.code);
				if (error.code === "auth/user-not-found") {
					setErrors({ ...errors, email: "No user found with this email" });
				}
				if (error.code === "auth/wrong-password") setErrors({ ...errors, password: "Password do not match" });
			}
		}
	};

	return (
		<main className="authentication">
			<section className="authentication-form">
				<form onSubmit={handleSubmit}>
					{!isRegistered && (
						<FormInput
							label="Name"
							name="name"
							type="text"
							value={input.name}
							onChange={handleChange}
							error={errors.name}
						/>
					)}
					<FormInput
						label="Email Address"
						name="email"
						type="email"
						value={input.email}
						onChange={handleChange}
						error={errors.email}
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						value={input.password}
						onChange={handleChange}
						error={errors.password}
					/>
					{!isRegistered && (
						<FormInput
							label="Confirm password"
							name="confirmPassword"
							type="password"
							value={input.confirmPassword}
							onChange={handleChange}
							error={errors.confirmPassword}
						/>
					)}

					<div className="container-btn-submit">
						<button
							className="btn btn-submit"
							type="submit"
							data-testid="signup"
						>
							{isRegistered ? "Log in" : "Sign up"}
						</button>
					</div>
				</form>

				<div className="container-btn-set">
					{isRegistered ? "Not registered yet ?" : "Already registered ?"}
					<button
						className="btn btn-info"
						onClick={() => setIsRegistered(!isRegistered)}
					>
						{isRegistered ? "Sign up" : "Log In"}
					</button>
				</div>
			</section>
		</main>
	);
};

export default Authentication;
