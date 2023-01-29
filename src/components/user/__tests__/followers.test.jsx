import { render, screen } from "@testing-library/react";
import Followers from "../Followers";

test("Should render all the followers properly", async () => {
	render(<Followers />);
	const itemNo = await screen.findAllByAltText("follower-pic");
	expect(itemNo).toHaveLength(30);
});
