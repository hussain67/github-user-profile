import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("Render login component properly", () => {
	render(<Login />);
	const LogInText = screen.getByText(/Log in/i);
	document.contains(LogInText);
});
