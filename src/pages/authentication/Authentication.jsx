import React, { useState } from "react";
import FormInput from "./FormInput";
import validator from "validator";
import "./authentication.scss";

const Authentication = () => {
	const initialInput = {
		name: "",
		email: "",
		password: "",
		confirmPassword: ""
	};
	const [isRegistered, setIsRegistered] = useState(true);
	const [input, setInput] = useState(initialInput);
	const [errors, setErrors] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value
		});
	};
	const isFormValid = isRegistered => {
		const { name, email, password, confirmPassword } = input;

		let errors = {};
		console.log(errors);
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

	const handleSubmit = e => {
		e.preventDefault();
		console.log("submitted");
		isFormValid(isRegistered);
		//if(isFormValid(isRegistered)) return
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
						value={input.value}
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
