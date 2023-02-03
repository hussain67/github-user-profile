import { render, screen } from "../../../test-utils/test-library-utils";

import Info from "../Info";

test("Examine the number of items displayed", async () => {
	render(<Info />);

	const followers = await screen.findByText(/3000/i);
	expect(followers).toBeInTheDocument();
	const noOfItems = await screen.findAllByRole("article");

	expect(noOfItems).toHaveLength(4);
});
