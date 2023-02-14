import { render, screen } from "@testing-library/react";
import Authentication from "./Authentication";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("It shows inputs and button properly", async () => {
	render(<Authentication />);

	const buttonSet = screen.getByRole("button", { name: /Sign up/i });

	//Form will be set for Sign up
	await user.click(buttonSet);

	//Input Name
	const inputName = screen.getByText(/name/i);
	expect(inputName).toBeInTheDocument();

	// Input Email
	const inputEmail = screen.getByRole("textbox", { name: "Email Address" });
	expect(inputEmail).toBeInTheDocument();

	//Input password
	const password = screen.getByLabelText("Password");
	expect(password).toBeInTheDocument();

	//Input confirm password
	const confirmPassword = screen.getByLabelText("Confirm password");
	expect(confirmPassword).toBeInTheDocument();
});

describe("Log in error messages", () => {
	test("Shows error messages when input filds are not properly filled", async () => {
		render(<Authentication />);

		// Select elements
		const inputEmail = screen.getByRole("textbox", { name: "Email Address" });
		const inputPassword = screen.getByLabelText("Password");
		const submitButton = screen.getByRole("button", { name: /Log In/i });

		// Enter improper email and password
		await user.type(inputEmail, "shahid.gmail.com");
		await user.type(inputPassword, "123");

		// Submit the form
		await user.click(submitButton);

		// Select error messages
		const emailErrorMessage = await screen.findByText("Valid email is required");
		const passwordErrorMessage = await screen.findByText("Password should contain atleast 6 character");

		//Assertion
		expect(emailErrorMessage).toBeInTheDocument();
		expect(passwordErrorMessage).toBeInTheDocument();
	});
});

describe("Sign up error message", () => {
	test("Shows error message for incorrect inputs", async () => {
		render(<Authentication />);

		// Select the button for Sign up
		const buttonSet = screen.getByRole("button", { name: /Sign up/i });

		//Form will be set for Sign up
		await user.click(buttonSet);

		//Select elements

		const inputName = screen.getByRole("textbox", { name: "Name" });
		const inputEmail = screen.getByRole("textbox", { name: "Email Address" });
		const inputPassword = screen.getByLabelText("Password");
		const submitButton = screen.getByRole("button", { name: /Sign up/i });

		// Inputs
		await user.type(inputName, "S");
		await user.type(inputEmail, "Shahid.com");
		await user.type(inputPassword, "123");
		await user.click(submitButton);

		// Select error messages
		const nameErrorMessage = await screen.findByText("Name should be at least two characters long");
		const emailErrorMessage = await screen.findByText("Valid email is required");
		const passwordErrorMessage = await screen.findByText("Password should contain atleast 6 character");

		// Assert
		expect(nameErrorMessage).toBeInTheDocument();
		expect(emailErrorMessage).toBeInTheDocument();
		expect(passwordErrorMessage).toBeInTheDocument();
	});
});
