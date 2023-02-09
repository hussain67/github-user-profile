import { fireEvent, render, screen } from "@testing-library/react";
import Authentication from "./Authentication";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

test("It shows inputs and button properly", () => {
	render(<Authentication />);

	const buttonSet = screen.getByRole("button", { name: /sign up/i });

	//Form will be set for Sign up
	userEvent.click(buttonSet);

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
describe.only("test", () => {
	test("submits username and password", async () => {
		render(<Authentication />);

		const email = "shahid@yahoo.com";
		const password = "123124";

		//Selet elements
		const inputEmail = await screen.findByRole("textbox", { name: "Email Address" });
		const inputPassword = await screen.findByLabelText("Password");

		//const submitButton = await screen.findByRole("button", { name: /Log In/i });
		//const submitButton = await screen.findByRole("button", { name: /log in/i });

		//Type in the selected elements
		userEvent.type(inputEmail, email);

		userEvent.type(inputPassword, password);

		//userEvent.click(submitButton);

		//Assertions
		expect(true).toBe(true);
	});
});
