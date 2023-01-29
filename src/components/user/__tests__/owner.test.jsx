import { render, screen } from "@testing-library/react";
import Owner from "../Owner";

test("Should display component elements properly", () => {
	render(<Owner />);
	const altText = screen.getByAltText(/owner-pic/i);
	expect(altText).toBeInTheDocument();

	const name = screen.getByRole("heading", { name: /wes bos/i });
	expect(name).toBeInTheDocument();
});
