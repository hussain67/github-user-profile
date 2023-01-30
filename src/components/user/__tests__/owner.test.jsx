import { render, screen } from "@testing-library/react";
import Owner from "../Owner";
test("Should display component elements properly", async () => {
	render(<Owner />);

	const altText = await screen.findByAltText("owner-pic");
	expect(altText).toBeInTheDocument();
	const name = screen.getByRole("heading", { name: /wes bos/i });
	expect(name).toBeInTheDocument();
});
