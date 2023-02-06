import { render, screen } from "@testing-library/react";
import Authentication from "./Authentication";
import userEvent from "@testing-library/user-event";

test("It shows input and button properly", () => {
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
