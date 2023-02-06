import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";

test("It shows a label and an input", () => {
	render(
		<FormInput
			label="email"
			name="email"
		/>
	);
	const labels = screen.getAllByLabelText(/email/i);
	expect(labels).toHaveLength(1);
	const inputs = screen.getAllByRole("textbox"); //will return an erray
	expect(inputs).toHaveLength(1);
});
