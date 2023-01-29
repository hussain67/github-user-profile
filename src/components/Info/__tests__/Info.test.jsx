import { render, screen } from "@testing-library/react";

import Info from "../Info";

test("Examine the number of items displayed", () => {
	render(<Info />);
	const noOfItems = screen.getAllByRole("article");
	expect(noOfItems).toHaveLength(4);
});
