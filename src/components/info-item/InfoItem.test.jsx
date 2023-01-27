import { render, screen } from "@testing-library/react";
import InfoItem from "./InfoItem";
import { GoRepo } from "react-icons/go";

const data = {
	icon: <GoRepo />,
	label: "Repos",
	value: 200,
	color: "blue"
};

test("Examine that Item component render properly", () => {
	render(<InfoItem {...data} />);

	const labelText = screen.getByText(/repos/i);
	expect(labelText).toBeInTheDocument();

	const value = screen.getByRole("heading", { name: /200/i });
	expect(value).toBeInTheDocument();
});
