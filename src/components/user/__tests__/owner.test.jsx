import { render, screen } from "../../../test-utils/test-library-utils";
import Owner from "../Owner";

test("Should display component elements properly", async () => {
	render(<Owner />);
	const altText = await screen.findByAltText("owner-pic");
	expect(altText).toBeInTheDocument();
	const name = await screen.findByRole("heading", { name: /wes bos/i });
	expect(name).toBeInTheDocument();
});
